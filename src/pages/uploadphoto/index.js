import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'
import { IconAddPhoto, IconRmvPhoto, ILNullPhoto } from '../../assets'
import { Buttons, Gap, Header, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fornts, showError, storeData } from '../../utils'

const UploadPhoto = ({navigation,route}) => {
    const {fullName,profession,uid} = route.params;

    const [hasPhoto,setHasPhoto] = useState(false)
    const [photoForDb,setPhotoForDb] = useState('');
    const [photo,setPhoto] = useState(ILNullPhoto)
    const getImmage = () => {
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
                showError("Upss Nampaknyah anda tidak memilih photo !")
            }else{
                const source = { uri: response.uri}
                setPhotoForDb(`data:${response.type};base64, ${response.data}`);
                setPhoto(source)
                setHasPhoto(true)
            }

        });

    }

    const UploadAndNext = () => {
        Fire.database().ref('users/' + uid + '/').update({photo : photoForDb});
        const data = route.params
        data.photo = photoForDb
        storeData('user',data);
        navigation.replace('MainApp')
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImmage}>
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto && <IconRmvPhoto style={styles.IcaddPhoto}/>}
                        {!hasPhoto && <IconAddPhoto style={styles.IcaddPhoto}/>}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profesional}>{profession}</Text>
                </View>
                <View>
                    <Buttons 
                     disable={!hasPhoto}
                     title="Upload And Continue"
                     onPress={UploadAndNext} 
                     />
                    <Gap height={30}/>
                    <Link title="Skip for this" align="center" size={16} onPress={()=> navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 /2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    IcaddPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fornts.primary[600],
        textAlign: 'center'
    },
    profesional: {
        fontSize: 18,
        fontFamily: fornts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    }
})
