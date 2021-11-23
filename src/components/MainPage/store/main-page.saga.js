import {call, put, takeEvery} from "redux-saga/effects";
import { GET_USERS, GET_USERS_REQUESTED, SET_TOTAL_PAGES } from "./main-page.action";
import adapter from "../../../common/utils";
import getResponse from './main-page.api';

function* getUserData ({payload}){
    const data = yield call(getResponse, payload);
    yield put({type:GET_USERS, payload: adapter(data)});
    yield put({type:SET_TOTAL_PAGES, payload: data.total_pages});
}

function* mainPageSaga(){
    yield takeEvery(GET_USERS_REQUESTED, getUserData);
}

export default mainPageSaga;