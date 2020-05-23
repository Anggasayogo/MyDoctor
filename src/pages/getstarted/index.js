import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets';
import { Buttons } from '../../components';

const Getstarted = () => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengandokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Buttons title="Get Started"/>
                <View style={{ height: 16}}/>
                <Buttons title="Sign In" type="secondary"/>
            </View>
        </ImageBackground>
    )
}

export default Getstarted;

const styles = StyleSheet.create({
    page: {padding: 40,justifyContent: 'space-between',backgroundColor: 'white',flex: 1},
    title : {
        fontSize: 28,fontWeight: '600',color: 'white',marginTop: 91
    }
})
