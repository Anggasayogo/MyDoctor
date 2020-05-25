import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Getstarted');
        },3000)
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
    title : {textAlign: 'center',marginTop: 20,fontSize: 20,fontFamily: 'Nunito-SemiBold',color: colors.text.primary}
})
