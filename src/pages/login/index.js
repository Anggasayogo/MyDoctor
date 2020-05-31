import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Input, Link, Buttons, Gap } from '../../components'
import { colors, fornts } from '../../utils'

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILLogo/>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Adrres"/>
            <Gap height={24}/>
            <Input label="Password"/>
            <Gap height={10} />
            <Link title="Forgot My Password" size={12}/>
            <Gap height={40}/>
            <Buttons title="Sign In" onPress={() => navigation.navigate('MainApp')} />
            <Gap height={30}/>
            <Link title="Create New Account" size={16} align="center"/>
        </View>
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
