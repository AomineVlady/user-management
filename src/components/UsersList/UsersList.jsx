import React from "react";
import { useSelector } from "react-redux";
import UsersListItem from "../UsersListItem/UsersListItem";
import './UsersList.css';

const UsersList = () => {
    const userDataList = useSelector(state => state.mainPageReducer.userList);

    return (
        <ul className="user__list">
            {userDataList.map(user => <UsersListItem key={user.id} card={user} />)}
        </ul>
    );
};

export default UsersList;