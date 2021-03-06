import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DumyNews2 } from '../../../assets';
import { fornts, colors } from '../../../utils';

const NewsItems = ({title,date,image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={image} style={styles.image}/>
        </View>
    )
}

export default NewsItems;

const styles = StyleSheet.create({
    container: {flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16
    },
    title: {fontSize: 16, fontFamily: fornts.primary[600], color: colors.text.primary, maxWidth: '90%'},
    date: {fontSize: 12,fontFamily: fornts.primary.normal, color: colors.text.secondary, marginTop: 4},
    image: {width: 80,height: 60,borderRadius: 11},
    titleWrapper: {flex: 1},
})
