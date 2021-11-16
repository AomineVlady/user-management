import React from "react";
import { useSelector } from "react-redux";
import UsersListItem from "../users-list-item/users-list-item";
import './users-list.css';

const UsersList = () => {
    const userDataList = useSelector(state=> state.mainPageReducer.userList);
    return (
        <ul className="user__list">
            {userDataList.map(user => <UsersListItem key={user.id} card={user} />)}
        </ul>
    );
};

export default UsersList;