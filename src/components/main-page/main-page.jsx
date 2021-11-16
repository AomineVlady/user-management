import UsersList from "../users-list/users-list.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./main-page.css";
import adapter from "../../common/utils.js";
import { GET_USERS, SET_CURRENT_PAGE } from "./store/main-page.action.js";
import Popup from "./popup/popup.jsx";

const MainPage = () => {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.mainPageReducer.userList);
    const currentPage = useSelector(state => state.mainPageReducer.currentPage);
    const showPopup = useSelector(state => state.mainPageReducer.showPopup);

    const getResponse = async (URL) => {
        return await axios.get(URL).then(
            (response) => {
                const userList = adapter(response.data.data);
                dispatch({ type: GET_USERS, payload: userList })
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getResponse(`https://reqres.in/api/users?page=${currentPage}`);
    }, [currentPage]);

    const page1 = () => {
        dispatch({ type: SET_CURRENT_PAGE, payload: 1 });
    }

    const page2 = () => {
        dispatch({ type: SET_CURRENT_PAGE, payload: 2 });
    }

    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    {userList?.length ? <UsersList /> : <p>NOTHING DATA</p>}
                    {showPopup.visually ? <Popup /> : null}
                </div>
                <button onClick={page1}>1</button>
                <button onClick={page2}>2</button>
            </div>
        </main>
    )
}

export default MainPage;

