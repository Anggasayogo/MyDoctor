import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum } from '../../../assets';
import { colors, fornts } from '../../../utils';

const DoctorCategory = () => {
    return (
        <View style={styles.page}>
            <ILCatUmum style={styles.ilustration}/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>Dokter Umum</Text>
        </View>
    )
}

export default DoctorCategory;

const styles = StyleSheet.create({
    page: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 105,
        height: 130
    },
    ilustration: {
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: fornts.primary[300],
        color:colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fornts.primary[600],
        color:colors.text.primary
    }
})
