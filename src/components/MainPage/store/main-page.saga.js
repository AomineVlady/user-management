import { call, put, takeEvery } from "redux-saga/effects";
import {
    GET_USERS_REQUESTED,
    getUsers,
    setTotalPages,
} from "./main-page.action";
import adapter from "../../../common/utils";
import getUsersList from "./main-page.api";

function* getUserData({ payload }) {
    const data = yield call(getUsersList, payload);
    yield put(getUsers(adapter(data.data)));
    yield put(setTotalPages(data.total_pages));
}

function* mainPageSaga() {
    yield takeEvery(GET_USERS_REQUESTED, getUserData);
}

export default mainPageSaga;
