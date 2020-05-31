import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DumyDoctor2, IconNext } from '../../../assets';
import { colors, fornts } from '../../../utils';

const ListDoctor = ({profile,name,desc,type}) => {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.avatar}/>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type == 'next' && <IconNext/>
            }
        </View>
    )
}

export default ListDoctor;

const styles = StyleSheet.create({
    container: {flexDirection: 'row',padding: 16, borderBottomWidth: 1, borderBottomColor: colors.border,alignItems: 'center',justifyContent: 'space-between'},
    avatar: {width: 46, height: 46, borderRadius: 46 /2, marginRight: 12},
    name: { fontSize: 16, fontFamily: fornts.primary.normal, color: colors.text.primary},
    desc: { fontSize: 12, fontFamily: fornts.primary[300], color: colors.text.secondary },
    content : {flex: 1},
})
