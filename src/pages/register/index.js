import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Buttons } from '../../components';

const Register = () => {
    return (
        <View style={styles.page}>
            <Header/>
            <View style={styles.content}>
                <Input label="Full Name"/>
                <Input label="Pekerjaan"/>
                <Input label="Email"/>
                <Input label="Password"/>
                <Buttons title="continue"/>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
