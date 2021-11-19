import UsersList from "../UsersList/UsersList.jsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MainPage.css";
import { SET_CURRENT_PAGE, GET_USERS_REQUESTED } from "./store/main-page.action.js";
import Popup from "./Popup/Popup.jsx";

const MainPage = () => {
    const dispatch = useDispatch();

    const userList = useSelector(state => state.mainPageReducer.userList);
    const currentPage = useSelector(state => state.mainPageReducer.currentPage);
    const showPopup = useSelector(state => state.mainPageReducer.showPopup);

    useEffect(() => {
        if (!userList?.length){
            dispatch({ type: GET_USERS_REQUESTED, payload: `https://reqres.in/api/users?page=${currentPage}` });
        }
    }, []);

    const togglePage = (evt) => {
        evt.preventDefault();
        dispatch({ type: SET_CURRENT_PAGE, payload: +evt.target.text });
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
                        <a href="/" onClick={togglePage}>1</a>
                    </li>
                    <li className="pagination__item">
                        <a href="/" onClick={togglePage}>2</a>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default MainPage;

