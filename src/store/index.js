import { createStore, compose, applyMiddleware, } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from "@react-native-community/async-storage";

import rootReducers from '../reducer'
import sagas from '../sagas'

const config = {
    key:'root',
    storage:AsyncStorage,
    debug:true
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if(__DEV__){
    middleware.push(createLogger());
}

const reducers = persistCombineReducers(config,rootReducers);
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = {enhancers};
const store = createStore(reducers,compose(...enhancers))
const persistor = persistStore(store,persistConfig,()=>{
    console.warn('Test',store.getState());
    console.warn('Reducerler ',rootReducers)
});

const configureStore = ()=>{
    return {persistor,store};
}

sagaMiddleware.run(sagas)

export default configureStore;