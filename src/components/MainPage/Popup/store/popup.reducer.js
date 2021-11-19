import { GET_USER, UPDATE_USER_DATA } from "./popup.action.js"

const initialState ={
    user: null,
    
}

const popupReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USER:
            return({
                ...state,
                user: action.payload,
            });

        case UPDATE_USER_DATA:
            return({
                ...state,
                user: action.payload,
            });
    
        default:
            return state;
    }
}

export default popupReducer;