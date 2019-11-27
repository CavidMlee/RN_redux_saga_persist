import { takeEvery, all, call ,put} from 'redux-saga/effects';
import * as type from '../action/types';
import * as navigationActions from '../action/navigation'

function* navigateMain() {
    yield call(navigationActions.navigateToHome);

    const jsonData = yield fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(respons => respons.json())

    yield put({ type: 'ALL_DATA', payload: jsonData })
}


export default function* watch() {
    yield all([takeEvery(type.LOGIN_TYPE, navigateMain)])

}