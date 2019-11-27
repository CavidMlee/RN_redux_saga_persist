import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";
import { loginAction } from '../../action/login'
import styles from './styles'

const Login = ({ loginAction, loginData }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onPress = () => {
        if (password.length >= 5) {
            loginAction({
                userName,
                password
            })
        }
        else {
            alert("Your password must not be less than 5 characters!")
        }
    }

    const onPressPersist = () => {
        if (loginData.userName) {
            setUserName(loginData.userName);
            setPassword(loginData.password)
        }
        else {
            alert('No data')
        }
    }

    //console.log('LoginData ', loginData)

    return (
        <LinearGradient colors={['#9e37a0', '#7d34a7', '#5232b1']} style={styles.container}>
            <StatusBar backgroundColor="#8434a5" barStyle="light-content" />

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
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => onPress()}
                    style={styles.buttonContainer}>
                    <Text style={styles.textContainer}>LogIn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressPersist()}
                    style={styles.buttonContainer}>
                    <Text style={styles.textContainer}>Show my data</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const mapStateToProps = (state) => ({
    //loginData: state.loginReducer.loginData
    loginData: state.default.loginData
})

export default connect(mapStateToProps, { loginAction })(Login);