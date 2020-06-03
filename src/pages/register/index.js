import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Buttons, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

const Register = ({navigation}) => {
    const [name,setName] = useState('Angga Maulana')
    const [proffesion,setProffesion] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Data = () => {
        console.log(name);
    }
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack() } title="Daftar Akun"/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Input label="Full Name"/>
                <Gap height={24}/>
                <Input label="Pekerjaan"/>
                <Gap height={24}/>
                <Input label="Email"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={40}/>
                <Buttons title="continue" onPress={ () => Data()}/>
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
