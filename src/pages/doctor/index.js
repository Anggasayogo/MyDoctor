import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItems, Gap } from '../../components'
import { fornts, colors, getData } from '../../utils'
import {JSONCategoryDoctor, DumyDoctor3, DumyDoctor1, DumyDoctor2} from '../../assets';

const Doctor = ({navigation}) => {
    useEffect(()=>{
        getData('user').then((res) => {
            console.log('Data User adalah ',res);
        })
    },[])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30}/>
                        <HomeProfile onPress={()=> navigation.navigate("UserProfile")}/>
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperscrol}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={32} />
                            {
                                JSONCategoryDoctor.data.map((item) => {
                                    return(
                                        <DoctorCategory category={item.category} key={item.id} onPress={()=>navigation.navigate('ChooseDoctor')}/>
                                    );
                                })
                            }
                            <Gap width={22} />
                        </View>
                    </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                            <RatedDoctor name="Alexa Rachel" desc="Pedia Trician" avatar={DumyDoctor3} onPress={()=> navigation.navigate('DoctorProfile')}/>
                            <RatedDoctor name="Suny Frank" desc="dantricst" avatar={DumyDoctor1}/>
                            <RatedDoctor name="Poee Min" desc="Pedia Trician" avatar={DumyDoctor2}/>
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    <NewsItems/>
                    <NewsItems/>
                    <NewsItems/>
                    <Gap height={30}/>    
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    wrapperSection: {
        paddingHorizontal: 16,
    },
    welcome : {
        fontSize: 20,
        fontFamily: fornts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209,
    },
    category: {
        flexDirection: 'row',
    },
    wrapperscrol: {
        marginHorizontal: -16
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fornts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    }
})
