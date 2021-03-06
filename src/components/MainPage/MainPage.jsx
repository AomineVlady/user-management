import UsersList from "../UsersList/UsersList.jsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MainPage.css";
import { SHOW_POPUP } from "./store/main-page.action.js";
import { getUsersRequested } from "./store/main-page.action-creators";
import Popup from "./Popup/Popup.jsx";
import PaginationList from "../PaginationList/PaginationList.jsx";

const MainPage = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.mainPageReducer.userList);
    const currentPage = useSelector((state) => state.mainPageReducer.currentPage);
    const showPopup = useSelector((state) => state.mainPageReducer.showPopup);
    const totalPages = useSelector((state) => state.mainPageReducer.totalPages);

    useEffect(() => {
        dispatch({ type: SHOW_POPUP, payload: { visually: false } });
        if (userList?.length) {
            return
        }
        dispatch(getUsersRequested(currentPage));
    }, [currentPage, dispatch, userList]);

    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    {userList?.length ? (
                        <UsersList />
                    ) : (
                        <p className="loading__message">...Loading</p>
                    )}
                    {showPopup?.visually ? <Popup /> : null}
                </div>
                {totalPages ? <PaginationList pageCount={totalPages} /> : null}
            </div>
        </main>
    );
};

export default MainPage;
