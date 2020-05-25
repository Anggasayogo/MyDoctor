import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fornts } from '../../../utils'
import IconOnly from './icononly'

const Buttons = ({type,title,onPress,icon}) => {
    if(type === 'icon-only'){
        return (
            <IconOnly icon={icon} onPress={onPress}/>
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
