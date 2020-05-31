import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fornts } from '../../../utils/'
import { Buttons, Gap } from '../../atoms'

const Header = ({onPress,title,type}) => {
    return (
        <View style={styles.container(type)}>
            <Buttons type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
                <Text style={styles.Text(type)}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal: 16,
            paddingVertical: 30,
            backgroundColor: type === 'dark' ? colors.secondary : colors.white,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomRightRadius : type === 'dark' ? 20 : 0,
            borderBottomLeftRadius : type === 'dark' ? 20 : 0,
            
        }
    ),
    Text: (type) => (
        {
            textAlign: 'center',
            flex: 1,
            fontFamily: fornts.primary[600],
            fontSize: 20,
            color: type === 'dark' ? colors.white : colors.text.primary
        }
    )
})
