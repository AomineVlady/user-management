import React, { useEffect } from "react";
import UsersList from "../users-list/users-list.jsx";
import { useSelector } from 'react-redux';
import "./main-page.css";
import { loadUserList } from "./store/main-page.api.js";
import { useDispatch } from "react-redux";

const MainPage = () => {
    const userList = useSelector(state => state.mainPageReducer.userList)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(loadUserList())},[])

    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                {userList && <UsersList userList={userList} />}
                </div>
            </div>
        </main>
    )
}

export default MainPage;

