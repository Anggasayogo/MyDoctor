import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILHospitalBg, DumyHospital1, DumyHospital2, DumyHospital3 } from '../../assets'
import { fornts, colors } from '../../utils'
import { ListHospital } from '../../components'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBg} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.konten}>
                <ListHospital pic={DumyHospital1} type="Rumah Sakit Jiwa" name="Citra Bunga Merdeka" addres="Jl.Raya pondok teko no 35"/>
                <ListHospital pic={DumyHospital2} type="Rumah Sakit Umum" name="Rsud Siloam" addres="Jl.Raya tangerang no 15"/>
                <ListHospital pic={DumyHospital3} type="Rumah Sakit Anak" name="Harapan Bunda" addres="Jl.Raya Robinson no 4"/>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    konten: {backgroundColor: colors.white, borderRadius: 20,flex: 1,marginTop: -30,paddingTop: 14},
    page: {backgroundColor: colors.secondary,flex: 1},
    background: {height: 240,paddingTop: 30},
    title: {fontSize: 20, fontFamily: fornts.primary[600],color: colors.white,textAlign: 'center'},
    desc: {fontSize: 12, fontFamily: fornts.primary[300], color: colors.white, marginTop: 6,textAlign: 'center'},
})
