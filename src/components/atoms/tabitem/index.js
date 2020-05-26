import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { IconDoctor, IconMessage, IconHospitals, IconDoctorActive, IconMessageActive, IconHospitalsActive } from '../../../assets';
import { colors, fornts } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabItem = ({title,active,onLongPress,onPress}) => {
    const Icon = () => {
        if(title === 'Doctor'){
            return active ? <IconDoctorActive/> : <IconDoctor/>
        }
        if(title === 'Messages'){
            return active ? <IconMessageActive/> : <IconMessage/>
        }
        if(title === 'Hospitals'){
            return active ? <IconHospitalsActive/> : <IconHospitals/>
        }

        return <IconDoctor/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem;

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
    },
    text: (active) => (
        {
            color: active ? colors.text.menuActive : colors.text.menuInactive,
            fontSize: 10,
            fontFamily: fornts.primary[600],
            marginTop: 4
        }
    )
})
