import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Buttons, Header, Input, Profile, Gap } from '../../components';
import { colors,getData, storeData} from '../../utils';
import {Fire} from '../../config';
import { showMessage} from "react-native-flash-message";
import ImagePicker from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

const UpdateProfile = ({navigation}) => {

    const [profile,setProfile] = useState({
        fullName : '',
        profession : '',
        email : '',
    });

    const [password,setPassword] = useState('')
    const [photo,setPhoto] = useState(ILNullPhoto)
    const [photoForDb,setPhotoForDb] = useState('')

    useEffect(()=> {
        getData('user').then(res=>{
            const data = res;
            setPhoto({uri : res.photo})
            setProfile(data)
        })
    },[])

    const Update = () => {
        //console.log('Upadet profiln',profile);
        const data = profile
        data.photo = photoForDb;
        Fire.database().ref(`users/${profile.uid}/`)
        .update(data)
        .then(res=>{
            console.log("succes Upadte",data)
            storeData('user',data)
        })
        .catch(err =>{
            showMessage({
                message: err.message,
                type: "danger",
            });
        })
    }

    const changeText = (key,value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    }
    const getImage = () => {

        const options = {
            title: 'Select Photo Profile',
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }

        ImagePicker.showImagePicker(options, (response) => {
             
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'upps ! nampaknyah anda tidak memilih photo',
                    type: "danger",
                });
            }else{
                console.log(response);
                const source = { uri: response.uri}
                setPhotoForDb(`data:${response.type};base64, ${response.data}`);
                console.log('Hasil get Image',response)
                setPhoto(source)
            }

        });
    }
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={()=> navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Profile isRemove photo={photo} onPress={getImage} />
                <Gap height={26}/>
                <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName',value)}/>
                <Gap height={24}/>
                <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession',value)}/>
                <Gap height={24}/>
                <Input label="Email" disable value={profile.email} onChangeText={(value) => changeText('email',value)}/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={40}/>
                <Buttons title="Save Profile" onPress={Update}/>
            </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    }
})
