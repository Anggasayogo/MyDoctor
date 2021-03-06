import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap, Header, List, Profile } from '../.../../../components';
import { colors, getData } from '../../utils';
import { ILNullPhoto } from '../../assets';
import { Fire } from '../../config';
import { showMessage} from "react-native-flash-message";

const UserProfile = ({navigation}) => {
    const [profil,setProfil] = useState({
        fullName: '',
        profession: '',
        photo : <ILNullPhoto/>
    });
    useEffect(()=>{
        getData('user').then((res) => {
            const data = res
            data.photo = {uri : res.photo};
            setProfil(data)
        })
    },[])

    const signOut = () => {
        Fire.auth().signOut().then(res => {
            console.log('success sign put !')
            navigation.replace('Getstarted');
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: "danger",
            });
        })
    }
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={()=>navigation.goBack()} />
            <Gap height={10}/>
            {profil.fullName.length > 0 && <Profile photo={profil.photo} name={profil.fullName} desc={profil.profession}/>}
            <Gap height={14}/>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={()=> navigation.navigate('UpdateProfile')} />
            <List name="Languaugee" desc="Last Update Yesterday" type="next" icon="language" />
            <List name="Give Us Rate" desc="Last Update Yesterday" type="next" icon="rate" />
            <List name="Sign Out" desc="Last Update Yesterday" type="next" icon="help" onPress={signOut} />
        </View>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    }
})
