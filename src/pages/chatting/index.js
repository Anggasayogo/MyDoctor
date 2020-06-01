import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components';
import { fornts, colors } from '../../utils';

const Chatting = () => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Nairoby Putri Hayza"/>
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <InputChat/>
        </View>
    )
}

export default Chatting;

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    chatDate : {
        fontSize: 11,
        fontFamily: fornts.primary.normal,
        color: colors.text.secondary,
        textAlign: 'center',
        marginVertical: 20,
    },
    page : {
        backgroundColor: colors.white,
        flex: 1
    }
})
