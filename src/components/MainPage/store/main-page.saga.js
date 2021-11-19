import {call, put, takeEvery} from "redux-saga/effects";
import { GET_USERS, GET_USERS_REQUESTED } from "./main-page.action";
import getResponse from './main-page.api';

function* getUserData ({payload}){
    const data = yield call(getResponse, payload);
    yield put({type:GET_USERS, payload: data});
}

function* mainPageSaga(){
    yield takeEvery(GET_USERS_REQUESTED, getUserData);
}

export default mainPageSaga;