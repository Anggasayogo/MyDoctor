import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fornts } from '../../../utils';
import { Buttons } from '../../atoms';
import { DumyDoctor3 } from '../../../assets';

const DarkProfiel = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Buttons type="icon-only" icon="back-light" onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>Nairoby Putri Hayza</Text>
                <Text style={styles.title}>Dokter anak</Text>
            </View>
            <Image style={styles.avatar} source={DumyDoctor3}/>
        </View>
    )
}

export default DarkProfiel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    avatar : {
        width: 46,
        height: 46,
        borderRadius: 46 /2
    },
    name : {fontSize: 20, fontFamily: fornts.primary[600], color: colors.white, textAlign: 'center'},
    title: {fontSize: 12, fontFamily: fornts.primary.normal, marginTop: 6, textAlign: 'center', color: colors.text.subTitle}
})
