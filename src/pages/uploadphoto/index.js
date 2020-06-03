import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Buttons, Link, Gap } from '../../components'
import { ILNullPhoto, IconAddPhoto } from '../../assets'
import { colors, fornts } from '../../utils'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar}/>
                        <IconAddPhoto style={styles.IcaddPhoto}/>
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profesional}>Product Designer</Text>
                </View>
                <View>
                    <Buttons title="Upload And Continue" onPress={()=> navigation.replace('MainApp')} />
                    <Gap height={30}/>
                    <Link title="Skip for this" align="center" size={16} onPress={()=> navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 /2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    IcaddPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fornts.primary[600],
        textAlign: 'center'
    },
    profesional: {
        fontSize: 18,
        fontFamily: fornts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    }
})
