import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Buttons, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';
import { Fire } from '../../config';

const Register = ({navigation}) => {

    const [form,setForm] = useForm({
        fullName : '',
        profession : '',
        email : '',
        password : '',
    })

    const onContinue = () => {
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            console.log('register success ',success);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log('error register',errorMessage);
        });
    }
    return (
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
