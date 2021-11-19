import mainPageSaga from '../components/MainPage/store/main-page.saga';
import popupSaga from '../components/MainPage/Popup/store/popup.saga';
import { spawn } from 'redux-saga/effects';

export default function * rootSaga () {
    yield spawn(mainPageSaga);
    yield spawn(popupSaga);
}