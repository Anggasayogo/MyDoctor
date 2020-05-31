import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ILCatAnak, ILCatObat, ILCatPesikiater, ILCatUmum } from '../../../assets';
import { colors, fornts } from '../../../utils';

const DoctorCategory = ({category,onPress}) => {
    const Icon = () => {
        if(category === 'Dokter umum'){
            return <ILCatUmum style={styles.ilustration}/>
        }else if(category === 'Dokter psikiater'){
            return <ILCatPesikiater style={styles.ilustration}/>
        }else if(category === 'Dokter obat'){
            return <ILCatObat style={styles.ilustration} />
        }else if(category === 'Dokter anak'){
            return <ILCatAnak style={styles.ilustration} />
        }
        return <ILCatUmum style={styles.ilustration}/>
    }
    return (
        <TouchableOpacity style={styles.page} onPress={onPress}>
            <Icon/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
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
        width: 112,
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
