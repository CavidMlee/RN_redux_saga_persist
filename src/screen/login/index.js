import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import navigation from '../../navigation';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

const Login = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onPress = () => {
        if (password.length >= 5) {
            navigation.navigate("Main")
        }
        else {
            alert("Your password must not be less than 5 characters!")
        }
    }

    return (
        <LinearGradient colors={['#fdf705', '#f3aa41', '#e9453b']} style={styles.container}>
            <StatusBar backgroundColor="#fdf705" barStyle="dark-content" />

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="white"
                    style={styles.inputStyle}
                    multiline={true}
                    autoCorrect={false}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="white"
                    style={styles.inputStyle}
                    multiline={true}
                    autoCorrect={false}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <TouchableOpacity onPress={() => onPress()}
                style={styles.buttonContainer}>
                <Text style={styles.textContainer}>Main</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Login;