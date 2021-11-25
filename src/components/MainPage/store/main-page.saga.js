import {call, put, takeEvery} from "redux-saga/effects";
import { GET_USERS, GET_USERS_REQUESTED, SET_TOTAL_PAGES } from "./main-page.action";
import adapter from "../../../common/utils";
import getUsersList from './main-page.api';

function* getUserData ({payload}){
    const data = yield call(getUsersList, payload);
    yield put({type:GET_USERS, payload: adapter(data.data)});
    yield put({type:SET_TOTAL_PAGES, payload: data.total_pages});
}

function* mainPageSaga(){
    yield takeEvery(GET_USERS_REQUESTED, getUserData);
}

export default mainPageSaga;