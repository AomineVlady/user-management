import { combineReducers } from 'redux';
import popupReducer from '../components/MainPage/Popup/store/popup.reducer'
import mainPageReducer from '../components/MainPage/store/main-page.reducer';

const rootReducer = combineReducers({
    mainPageReducer,
    popupReducer,
})

export default rootReducer;