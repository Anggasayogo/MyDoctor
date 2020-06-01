import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconStart } from '../../../assets';
import { colors, fornts } from '../../../utils';

const RatedDoctor = ({onPress,name,desc,avatar}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rated}>
                <IconStart/>
                <IconStart/>
                <IconStart/>
                <IconStart/>
                <IconStart/>
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor;

const styles = StyleSheet.create({
    profile: {flex: 1},
    name: {fontSize: 16, fontFamily: fornts.primary[600],color: colors.text.primary},
    category: {fontSize: 12, fontFamily: fornts.primary.normal, color: colors.text.secondary,marginTop: 2},
    container: {flexDirection: 'row',justifyContent: 'space-between',paddingBottom: 16,alignItems: 'center'},
    avatar: {width: 50,height: 50, borderRadius: 50/2,marginRight: 12},
    rated: {flexDirection: 'row'}
})
