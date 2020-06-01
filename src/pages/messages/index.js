import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from '../../components'
import { colors, fornts } from '../../utils'
import { DumyDoctor1, DumyDoctor2, DumyDoctor3 } from '../../assets'

const Messages = () => {
    const [doctors] = useState([
        {
            id: 1,
            profile : DumyDoctor1,
            name: 'Alexander Janie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...'
        },
        {
            id: 2,
            profile : DumyDoctor2,
            name: 'John McParker Steve',
            desc: 'Oh tentu saja tidak karena jeruk it...'
        },
        {
            id: 3,
            profile : DumyDoctor3,
            name: 'Nairobi Putri Hayza',
            desc: 'Oke menurut pak dokter bagaimana unt...'
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctors.map( (doctor) => {
                        return (
                            <List 
                            key={doctor.id}
                            profile={doctor.profile} 
                            name={doctor.name} 
                            desc={doctor.desc}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    title: {fontSize: 20,
        fontFamily: fornts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },
    page: {backgroundColor: colors.secondary, flex: 1},
    content: {backgroundColor: colors.white,flex: 1,borderBottomLeftRadius: 16,borderBottomRightRadius: 16}
})
