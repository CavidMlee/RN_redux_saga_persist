import {takeEvery,all,call} from 'redux-saga/effects';
import * as type from '../action/types';
import * as navigationActions from '../action/navigation'

function* navigateMain(){
    yield call(navigationActions.navigateToHome);
}



export default function* watch(){
    yield all([takeEvery(type.LOGIN_TYPE,navigateMain)])

}