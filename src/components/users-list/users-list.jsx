import React from "react";
import UsersListItem from "../users-list-item/users-list-item";
import './users-list.css';

const UsersList = (props) => {
    const userDataList = props.userList;
    return (
        <ul className="user__list">
            {userDataList.map(user => <UsersListItem key={user.id} card={user} />)}
        </ul>
    );
};

export default UsersList;