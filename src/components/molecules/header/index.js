import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fornts } from '../../../utils/'
import { Buttons, Gap } from '../../atoms'

const Header = ({onPress,title}) => {
    return (
        <View style={styles.container}>
            <Buttons type="icon-only" icon="back-dark" onPress={onPress} />
                <Text style={styles.Text}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Text: {
        textAlign: 'center',
        flex: 1,
        fontFamily: fornts.primary[600],
        fontSize: 20,
        color: colors.text.primary
    }
})
