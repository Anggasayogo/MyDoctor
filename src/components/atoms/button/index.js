import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fornts } from '../../../utils'
import IconOnly from './icononly'
import BtnIconSend from './BtnIcon'

const Buttons = ({type,title,onPress,icon,disable}) => {
    if(type === 'btn-icon-send'){
        return (
            <BtnIconSend disable={disable}/>
        )
    }
    if(type === 'icon-only'){
        return (
            <IconOnly icon={icon} onPress={onPress}/>
        )
    }
    if(disable){
        return (
            <View style={styles.container(type)} onPress={onPress}>
                <Text style={styles.text(type)}>{title}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container: (type) => ({
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background
    }),
    text: (type) => (
        {
            fontSize: 18,
            textAlign: 'center',
            color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
            fontFamily: fornts.primary[600]
        }
    )
})
