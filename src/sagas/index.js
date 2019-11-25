import {takeEvery,all} from 'redux-saga/effects';
import * as type from '../action/types';

export default function* watch(){
    yield all([takeEvery(type.LOGIN_TYPE,alert('saga'))])
}