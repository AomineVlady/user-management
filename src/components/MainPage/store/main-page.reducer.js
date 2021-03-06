import {
    GET_USERS,
    SET_CURRENT_PAGE,
    SHOW_POPUP,
    SET_TOTAL_PAGES,
} from "./main-page.action";

const initialState = {
    userList: null,
    currentPage: null,
    totalPages: null,
    showPopup: {
        visually: false,
        userId: null,
    },
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                userList: action.payload,
            };

        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload,
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case SHOW_POPUP:
            return {
                ...state,
                showPopup: action.payload,
            };

        default:
            return state;
    }
};

export default mainPageReducer;
