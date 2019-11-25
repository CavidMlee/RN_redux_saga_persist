import {LOGIN_TYPE} from './types';

export const loginAction = (loginData) =>{
    return{
        type:LOGIN_TYPE,
        payload:loginData
    }
};