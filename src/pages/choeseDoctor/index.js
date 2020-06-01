import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ListDoctor } from '../../components';
import { DumyDoctor3 } from '../../assets';
import { colors } from '../../utils';

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Pilih dokter anak" type="dark" onPress={()=> navigation.goBack()}/>
            <ListDoctor type="next" profile={DumyDoctor3} name="Alexander Janie" desc="Wanita" onPress={()=> navigation.navigate('Chatting')}/>
            <ListDoctor type="next" profile={DumyDoctor3} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor type="next" profile={DumyDoctor3} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor type="next" profile={DumyDoctor3} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor type="next" profile={DumyDoctor3} name="Alexander Janie" desc="Wanita"/>
        </View>
    )
}

export default ChooseDoctor;

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors.white,
        flex: 1
    }
})
