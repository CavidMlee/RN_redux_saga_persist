import React from 'react';
import NavigationStack from './navigationStack';
import NavigationService from './navigationService';

const AppNavigators = () => {
    return (
        <NavigationStack
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        />
    )
}
export default AppNavigators