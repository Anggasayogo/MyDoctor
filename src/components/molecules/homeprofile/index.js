import React, { useState,useEffect } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { DumyProfile } from '../../../assets/dummy';
import { colors, fornts,getData } from '../../../utils';
import { ILNullPhoto } from '../../../assets';

const HomeProfile = ({onPress}) => {
    const [profile,setProfile] = useState({
        photo : ILNullPhoto,
        fullName : '',
        profession : '',
    });

    useEffect(()=>{
        getData('user').then((res) => {
            console.log('Data User adalah ',res);
            const data = res;
            data.photo = {uri : data.photo}
            setProfile(res)
        })
    },[])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.perofesi}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 /2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fornts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize',
    },
    perofesi: {
        fontSize: 12,
        fontFamily: fornts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize',
    }
})
