import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { DumyDoctor1, IconStart } from '../../../assets';
import { fornts, colors } from '../../../utils';

const RatedDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DumyDoctor1} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>Alexa Rachel</Text>
                <Text style={styles.category}>Pediatrician</Text>
            </View>
            <View style={styles.rated}>
                <IconStart/>
                <IconStart/>
                <IconStart/>
                <IconStart/>
                <IconStart/>
            </View>
        </View>
    )
}

export default RatedDoctor;

const styles = StyleSheet.create({
    profile: {flex: 1},
    name: {fontSize: 16, fontFamily: fornts.primary[600],color: colors.text.primary},
    category: {fontSize: 12, fontFamily: fornts.primary.normal, color: colors.text.secondary,marginTop: 2},
    container: {flexDirection: 'row',justifyContent: 'space-between',paddingBottom: 16},
    avatar: {width: 50,height: 50, borderRadius: 50/2,marginRight: 12},
    rated: {flexDirection: 'row'}
})
