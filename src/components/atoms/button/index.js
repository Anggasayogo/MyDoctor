import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Buttons = ({type,title,onPress}) => {
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
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4'
    }),
    text: (type) => (
        {
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
            color: type === 'secondary' ? 'black' : 'white',
            fontFamily: 'Nunito-SemiBold'
        }
    )
})
