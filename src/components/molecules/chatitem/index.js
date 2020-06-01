import React from 'react';
import { StyleSheet } from 'react-native';
import IsMe from './isMe';
import Other from './other';

const ChatItem = ({isMe}) => {
    if(isMe){
        return <IsMe/>
    }
    return <Other/>
}

export default ChatItem;

const styles = StyleSheet.create({})
