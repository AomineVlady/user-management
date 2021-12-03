import { call, put, takeLatest } from "redux-saga/effects";
import {
    GET_USER_REQUESTED,
    UPDATE_USER_DATA_REQUESTED,
} from "./popup.action";
import {
    getUser,
    updateUserData,
} from "./popup.action-creators";
import getUserResponse from "./popup.api";
import changeUserData from "../../../ChangeUser/change-user.api";

function* getUserData({ payload }) {
    const data = yield call(getUserResponse, payload);
    yield put(getUser(data));
}

function* postChangedUser({ payload }) {
    const data = yield call(changeUserData, payload);
    yield put(updateUserData({ ...data } ));
}

function* popupSaga() {
    yield takeLatest(GET_USER_REQUESTED, getUserData);
    yield takeLatest(UPDATE_USER_DATA_REQUESTED, postChangedUser);
}

export default popupSaga;
