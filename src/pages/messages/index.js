import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListDoctor } from '../../components'
import { colors, fornts } from '../../utils'

const Messages = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <ListDoctor/>
                <ListDoctor/>
                <ListDoctor/>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    title: {fontSize: 20,
        fontFamily: fornts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },
    page: {backgroundColor: colors.secondary, flex: 1},
    content: {backgroundColor: colors.white,flex: 1,borderBottomLeftRadius: 16,borderBottomRightRadius: 16}
})
