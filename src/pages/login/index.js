import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from "react-native-flash-message"
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { ILLogo } from '../../assets'
import { Buttons, Gap, Input, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fornts, storeData, useForm } from '../../utils'

const Login = ({navigation}) => {
    const [form,setForm] = useForm({
        email : '',
        password : '',
    });

    const dispatch = useDispatch();

    const Login = () => {
        console.log('Data dari form',form);
        dispatch({type : 'SET_LOADING',value : true})
       Fire.auth().signInWithEmailAndPassword(form.email, form.password)
       .then(res=>{
           console.log('successnyah',res)
           dispatch({type : 'SET_LOADING',value : false})
           Fire.database().ref(`users/${res.user.uid}/`).once('value')
           .then(resDb => {
               console.log('Respons dari firebase',resDb)
               if(resDb.val()){
                   storeData('user',resDb.val());
                   navigation.replace('MainApp');
               }
           })
       })
       .catch(err=>{
           console.log('Erronyah adalah',err)
           showMessage({
            message: err.message,
            type: "danger",
           });
           dispatch({type : 'SET_LOADING',value : false})
       })
    }

    return (
        <>
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ILLogo/>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Adrres" value={form.email} onChangeText={value => setForm('email',value)}/>
            <Gap height={24}/>
            <Input label="Password" secureTextEntry value={form.password} onChangeText={value => setForm('password',value)}/>
            <Gap height={10} />
            <Link title="Forgot My Password" size={12}/>
            <Gap height={40}/>
            <Buttons title="Sign In" onPress={Login} />
            <Gap height={30}/>
            <Link 
            title="Create New Account" 
            size={16} align="center" 
            onPress={()=> navigation.navigate('Register')}
            />
            </ScrollView>
        </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page : {
        padding: 40,
        flex: 1,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 20,
        fontFamily: fornts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 160
    }
})
