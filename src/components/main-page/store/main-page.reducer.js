import GET_USER_LIST from './main-page.action.js';

const initialState = {
    userList: null
  }

export const mainPageReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_USER_LIST:
            return(
                {
                    ...state,
                    userList: action.payload,
                }
            )
    
        default: return state
    }
}