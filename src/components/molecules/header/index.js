import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../../assets'
import { Gap } from '../../atoms'
import { colors } from '../../../utils/'

const Header = () => {
    return (
        <View style={styles.container}>
            <IconBackDark/>
            <Text style={styles.Text}>Text Header</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Text: {
        textAlign: 'center',
        flex: 1,
        fontFamily: 'Nunito-SemiBold',
        fontSize: 20,
        color: colors.text.primary
    }
})
