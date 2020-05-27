import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DumyDoctor2 } from '../../../assets';
import { colors, fornts } from '../../../utils';

const ListDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DumyDoctor2} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Nairobi Putri Hayza</Text>
                <Text style={styles.desc}>Oh tentu saja tidak karena jeruk it...</Text>
            </View>
        </View>
    )
}

export default ListDoctor;

const styles = StyleSheet.create({
    container: {flexDirection: 'row',padding: 16, borderBottomWidth: 1, borderBottomColor: colors.border,alignItems: 'center'},
    avatar: {width: 46, height: 46, borderRadius: 46 /2, marginRight: 12},
    name: { fontSize: 16, fontFamily: fornts.primary.normal, color: colors.text.primary},
    desc: { fontSize: 12, fontFamily: fornts.primary[300], color: colors.text.secondary }
})
