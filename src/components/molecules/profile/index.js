import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DumyProfile } from '../../../assets/dummy';
import { colors, fornts } from '../../../utils';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={DumyProfile} style={styles.avatar}/>
            </View>
            <Text style={styles.name}>Shayna Melinda</Text>
            <Text style={styles.profession}>Product Designer</Text>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    avatar: { width: 110, height: 110, borderRadius: 110 / 2},
    borderProfile : {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name : {
        fontSize: 20, fontFamily: fornts.primary[600],
        color: colors.text.primary, marginTop: 16
    },
    profession: {
        fontSize: 16,
        fontFamily: fornts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
    },
})
