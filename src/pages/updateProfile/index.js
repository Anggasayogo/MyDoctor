import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import { Buttons, Gap, Header, Input, Profile } from '../../components';
import { Fire } from '../../config';
import { colors, getData, showError, storeData } from '../../utils';

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
        if(password.length > 0){
            if(password.length < 6){
                showError('upps ! password kurang dari 6 character');
            }else{
                //update password
                updatePassword();
                updateProfile();
                navigation.replace('MainApp')
            }
        }else{
            updateProfile();
            navigation.replace('MainApp')
        }
    }

    const updatePassword = () => {
        //update password
        Fire.auth().onAuthStateChanged(user => {
            if(user){
                //update password
                user.updatePassword(password).catch(err=>{
                    showError(err.message)
                })
            }
        })
    }

    const updateProfile = () => {
        const data = profile
        data.photo = photoForDb;

        Fire.database().ref(`users/${profile.uid}/`)
            .update(data)
            .then(res=>{
                storeData('user',data)
            })
            .catch(err =>{
                showError(err.message)
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
                showError('upps ! nampaknyah anda tidak memilih photo');
            }else{
                const source = { uri: response.uri}
                setPhotoForDb(`data:${response.type};base64, ${response.data}`);
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
                <Input secureTextEntry label="Password" value={password} onChangeText={(value) => setPassword(value)}/>
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
