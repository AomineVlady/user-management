import UsersList from "../users-list/users-list.jsx";
import axios from "axios";
import React, { createElement, useEffect, useState } from "react";
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

    const page1 = (evt) => {
        evt.preventDefault();
        dispatch({ type: SET_CURRENT_PAGE, payload: 1 });
    }

    const page2 = (evt) => {
        evt.preventDefault();
        dispatch({ type: SET_CURRENT_PAGE, payload: 2 });
    }

    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    {userList?.length ? <UsersList /> : <p>NOTHING DATA</p>}
                    {showPopup.visually ? <Popup /> : null}
                </div>

                <ul className="pagination__list">
                    <li className="pagination__item">
                        <a href="/" onClick={page1}>1</a>
                    </li>
                    <li className="pagination__item">
                        <a href="/" onClick={page2}>2</a>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default MainPage;

