import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Buttons, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

const Register = ({navigation}) => {
    const [fullName,setFullName] = useState('')
    const [profession,setProfession] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onContinue = () => {
        console.log(fullName,profession,email,password);
    }
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack() } title="Daftar Akun"/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Input label="Full Name" onChangeText={setFullName} value={fullName}/>
                <Gap height={24}/>
                <Input label="Pekerjaan" onChangeText={setProfession} value={profession}/>
                <Gap height={24}/>
                <Input label="Email" onChangeText={setEmail} value={email}/>
                <Gap height={24}/>
                <Input label="Password" onChangeText={setPassword} value={password} secureTextEntry/>
                <Gap height={40}/>
                <Buttons title="continue" onPress={ () => onContinue()}/>
            </View>
            </ScrollView>
        </View>
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
