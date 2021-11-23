import {call, put, takeEvery} from "redux-saga/effects";
import { GET_USER, GET_USER_REQUESTED,UPDATE_USER_DATA, UPDATE_USER_DATA_REQUESTED } from "./popup.action";
import getUserResponse from './popup.api';
import changeUserData from '../../../ChangeUser/change-user.api';

function* getUserData ({payload}){
    const data = yield call(getUserResponse, payload);
    yield put({type:GET_USER, payload: data});
};

function* postChangedUser({payload}){
    const data = yield call(changeUserData, payload);
    yield put({type:UPDATE_USER_DATA, payload: {...data}}); 
}

function* popupSaga(){
    yield takeEvery(GET_USER_REQUESTED, getUserData);
    yield takeEvery(UPDATE_USER_DATA_REQUESTED, postChangedUser);
}

export default popupSaga;