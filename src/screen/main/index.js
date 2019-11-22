import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

const Main = () => {

    return (
        <LinearGradient colors={['#fdf705', '#f3aa41', '#e9453b']} style={styles.container}>
            <Text style={styles.textContainer}>Main Page</Text>
        </LinearGradient>
    )
};

export default Main;