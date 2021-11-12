import { combineReducers } from 'redux';
import { mainPageReducer } from '../components/main-page/store/main-page.reducer.js';

const rootReducer = combineReducers({ mainPageReducer });

export default rootReducer;