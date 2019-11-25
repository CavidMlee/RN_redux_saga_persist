/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/store';

const { persistor, store } = configureStore()


import Navigation from './src/navigation'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator />}
        persistor={persistor}
      >
        <Navigation />
      </PersistGate>
    </Provider>
  );
};



export default App;
