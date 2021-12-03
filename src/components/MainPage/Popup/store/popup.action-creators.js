import {
    GET_USER,
    GET_USER_REQUESTED,
    UPDATE_USER_DATA,
    UPDATE_USER_DATA_REQUESTED,
} from "./popup.action";

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user,
    };
};

export const getUserRequested = (userId) => {
    return {
        type: GET_USER_REQUESTED,
        payload: userId,
    };
};

export const updateUserData = (data) => {
    return {
        type: UPDATE_USER_DATA,
        payload: data,
    };
};

export const updateUserDataRequested = (userId, data) => {
    return {
        type: UPDATE_USER_DATA_REQUESTED,
        payload: {
            url: `http://localhost:5000/api/users/${userId}`,
            data: data,
            id: userId,
        },
    };
};
