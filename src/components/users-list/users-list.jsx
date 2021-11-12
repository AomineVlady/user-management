import React from "react";
import UsersListItem from "../users-list-item/users-list-item";
import './users-list.css';

const UsersList = (props) => {
    const userList = props.userList.data;
    return (
        <ul className="user__list">
            {userList.map(user => <UsersListItem key={user.id} card={user} />)}
        </ul>
    );
};

export default UsersList;