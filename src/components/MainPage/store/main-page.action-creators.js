import {
    GET_USERS,
    GET_USERS_REQUESTED,
    SET_CURRENT_PAGE,
    SET_TOTAL_PAGES,
} from "./main-page.action";

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users,
    };
};

export const getUsersRequested = (pageNumber) => {
    return {
        type: GET_USERS_REQUESTED,
        payload: pageNumber,
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
