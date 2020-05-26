import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItems, Gap } from '../../components'
import { fornts, colors } from '../../utils'

const Doctor = () => {
    return (
        <View style={styles.page}>
          <View style={styles.content}>
            <HomeProfile/>
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
            <View style={styles.wrapperscrol}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.category}>
                        <Gap width={16} />
                        <DoctorCategory/>
                        <DoctorCategory/>
                        <DoctorCategory/>
                        <DoctorCategory/>
                        <Gap width={6} />
                    </View>
                </ScrollView>
            </View>
            <Text>Top Rated Doctor</Text>
            <RatedDoctor/>
            <RatedDoctor/>
            <RatedDoctor/>
            <Text>Good News</Text>
            <NewsItems/>
            <NewsItems/>
            <NewsItems/>
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
        paddingHorizontal: 16,
        paddingVertical: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})
