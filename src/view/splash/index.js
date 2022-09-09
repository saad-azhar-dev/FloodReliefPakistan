import React, { useEffect } from 'react'
import { View, Text, } from 'react-native'
import { StackActions } from '@react-navigation/native';
import styles from './styles'
import Footer from '../../components/AppFooter';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch({
                ...StackActions.replace('HomeScreen'),
            });
        }, 3000)
    }, [])



    return (
        <View style={{ flex: 1 }}>

            <View style={styles.wraper}>
                <Text style={styles.text_style}>Flood</Text>
                <Text style={styles.text_style}>Relief</Text>
                <Text style={styles.text_style}>Pakistan</Text>
            </View>
            <Footer />

        </View>
    )
}

export default Splash