import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fornts } from '../../../utils'

const Input = ({label,value,onChangeText,secureTextEntry}) => {
    // border nilai awal dan setBorder ketika diubah
    const [border,setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.tertiery)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input(border)} 
            onBlur={onBlurForm} 
            onFocus={onFocusForm}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input: (border) => (
        {
            borderWidth: 1,
            borderColor: border,
            borderRadius: 10,
            padding: 12
        }
    ),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fornts.primary.normal
    }
})
