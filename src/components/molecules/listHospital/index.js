import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DumyHospital1 } from '../../../assets';
import { colors, fornts } from '../../../utils';

const ListHospital = ({type,name,addres,pic}) => {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.picture}/>
            <View>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.addres}>{addres}</Text>
            </View>
        </View>
    )
}

export default ListHospital;

const styles = StyleSheet.create({
    addres: {fontSize: 12, fontFamily: fornts.primary[300], color: colors.text.secondary,marginTop: 6},
    title: {fontFamily: fornts.primary.normal, fontSize: 16,color: colors.text.primary},
    picture: {width: 80, height: 60, borderRadius: 11,marginRight: 16},
    container: {flexDirection: 'row',padding: 16,borderBottomWidth: 1,borderBottomColor: colors.border},
})
