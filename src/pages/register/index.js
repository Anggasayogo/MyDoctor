import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Buttons, Gap, Header, Input, Loading } from '../../components';
import { Fire } from '../../config';
import { colors, showError, storeData, useForm } from '../../utils';

const Register = ({navigation}) => {

    const [form,setForm] = useForm({
        fullName : '',
        profession : '',
        email : '',
        password : '',
    })

    const [loading,setLoading] = useState(false)

    const onContinue = () => {  
        setLoading(true);
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading(false);
            setForm('reset');
            const data = {
                fullName : form.fullName,
                profession : form.profession,
                email : form.email,
                uid : success.user.uid,
            }
            Fire.database().ref('users/' +success.user.uid+ '/').set(data);
            storeData('user',data)
            navigation.replace('UploadPhoto',data)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setLoading(false);
            showError(error.message);
        });
    }

    const test = () =>{
        const data = {
            fullName : 'Nazwasihab',
            profession : 'narasi',
            email : 'narasi@mail.com',
        }
        storeData('user',data)
        navigation.navigate('UploadPhoto',data)
    }
    return (
        <>
            <View style={styles.page}>
                <Header onPress={() => navigation.goBack() } title="Daftar Akun"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Input label="Full Name" onChangeText={value => setForm('fullName',value)} value={form.fullName}/>
                        <Gap height={24}/>
                        <Input label="Pekerjaan" onChangeText={value => setForm('profession',value)} value={form.profession}/>
                        <Gap height={24}/>
                        <Input label="Email" onChangeText={value => setForm('email',value)} value={form.email}/>
                        <Gap height={24}/>
                        <Input label="Password" onChangeText={value => setForm('password',value)} value={form.password} secureTextEntry/>
                        <Gap height={40}/>
                        <Buttons title="continue" onPress={onContinue}/>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading/>}
        </>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
