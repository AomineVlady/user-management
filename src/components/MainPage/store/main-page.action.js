export const GET_USERS = "GET_USERS";
export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";
export const SHOW_POPUP = "SHOW_POPUP";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users,
    };
};

export const getUsersRequested = (pageNumber) => {
    return {
        type: GET_USERS_REQUESTED,
        payload: `http://localhost:5000/api/users/?page=${pageNumber}`,
    };
};

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: `http://localhost:5000/api/users/?page=${pageNumber}`,
    };
};

export const setTotalPages = (pagesCount) => {
    return {
        type: SET_TOTAL_PAGES,
        payload: pagesCount,
    };
};
