import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import {Login,Main} from '../screen'

const defaultNavigationOption = { header: null };

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: defaultNavigationOption,
        path: 'login'
    },
    Main: {
        screen: Main,
        navigationOptions: defaultNavigationOption,
        path: 'main'
    }
});

export default createAppContainer(AppNavigator)