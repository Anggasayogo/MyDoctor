import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets';
import { Buttons, Gap } from '../../components';
import { colors, fornts } from '../../utils';
import {useSelector} from 'react-redux';

const Getstarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Buttons title="Get Started" onPress={()=>{ navigation.navigate('Register') }}/>
                <Gap height={16} />
                <Buttons title="Sign In" type="secondary" onPress={()=>{ navigation.navigate('Login') }}/>
            </View>
        </ImageBackground>
    )
}

export default Getstarted;

const styles = StyleSheet.create({
    page: {padding: 40,justifyContent: 'space-between',backgroundColor: colors.white,flex: 1},
    title : {
        fontSize: 28,
        color: colors.white,
        marginTop: 91,
        fontFamily: fornts.primary[600]
    }
})
