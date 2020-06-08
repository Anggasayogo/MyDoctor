import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors, fornts } from '../../utils'
import { Fire } from '../../config'

const Splash = ({navigation}) => {
    
    useEffect(()=>{
        const unsubcribe = Fire.auth().onAuthStateChanged((user) => {
            setTimeout(()=>{
                if(user){
                    // user sudah login
                    navigation.replace('MainApp');
                }else{
                    // user logout
                    navigation.replace('Getstarted');
                }
            },3000)
        })
        return () => unsubcribe();
    },[])

    return (
        <View style={styles.page}>
            <ILLogo/>
            <Text style={styles.title}>My Doctor</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor:colors.white},
    title : {textAlign: 'center',marginTop: 20,fontSize: 20,fontFamily: fornts.primary[600],color: colors.text.primary}
})
