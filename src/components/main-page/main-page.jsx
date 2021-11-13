import UsersList from "../users-list/users-list.jsx";
import React from "react";
import "./main-page.css";

const MainPage = (props) => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <UsersList userList={props.userList} />
                </div>
            </div>
        </main>
    )
}

export default MainPage;

