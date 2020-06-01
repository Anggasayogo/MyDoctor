import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fornts } from '../../../utils'
import { Buttons } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.content}>
            <TextInput style={styles.chat} placeholder="Tulis Pesan Untuk Nairoby"/>
            <Buttons type="btn-icon-send"/>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    chat : {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,marginRight: 10,
        fontSize: 14,
        fontFamily: fornts.primary.normal,
        maxHeight: 45,
    },
    content: {padding: 16,flexDirection:'row'}
})
