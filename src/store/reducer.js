import { combineReducers } from 'redux';
import popupReducer from '../components/main-page/popup/store/popup.reducer'
import mainPageReducer from '../components/main-page/store/main-page.reducer';

const rootReducer = combineReducers({
    mainPageReducer,
    popupReducer,
})

export default rootReducer;