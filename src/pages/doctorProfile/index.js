import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Buttons, Gap } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = () => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile"/>
            <Profile name="Nairoby Putri Hayza" desc="Dokter anak"/>
            <Gap height={10}/>
            <ProfileItem label="Alumnus" value="Universitas Indonesia 2020" />
            <ProfileItem label="Tempat Praktik" value="Rumahsakit umum Tangerang" />
            <ProfileItem label="No.STR" value="000091827266354" />
            <Gap height={13}/>
            <View style={styles.action}>
                <Buttons title="Start Consultation"/>
            </View>
        </View>
    )
}

export default DoctorProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23,
    }
})
