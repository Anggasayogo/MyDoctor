import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILHospitalBg, DumyHospital1, DumyHospital2, DumyHospital3 } from '../../assets'
import { fornts, colors } from '../../utils'
import { ListHospital } from '../../components'
import { Fire } from '../../config'

const Hospitals = () => {
    const [hospitals,setHospitals] = useState([]);

    useEffect(()=>{
        Fire.database()
        .ref('hospital/')
        .once('value')
        .then(res=>{
            if(res.val()){
                setHospitals(res.val());
            }
        })
        .catch(err=>{
            console.log('Errornyah adalah :',err)
        })
    },[])
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBg} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.konten}>
                {hospitals.map(item => {
                    return (
                        <ListHospital 
                        key={item.id}
                        pic={{uri : item.image}} 
                        name={item.name} 
                        type={item.title} 
                        addres={item.addres} 
                        />
                    )
                })}
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
