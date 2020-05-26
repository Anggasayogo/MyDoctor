import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { DumyProfile } from '../../../assets/dummy';
import { colors, fornts } from '../../../utils';

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DumyProfile} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.perofesi}>Product Designer</Text>
            </View>
        </View>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 /2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fornts.primary[600],
        color: colors.text.primary
    },
    perofesi: {
        fontSize: 12,
        fontFamily: fornts.primary[400],
        color: colors.text.secondary
    }
})
