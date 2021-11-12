import React from "react";
import './user-list-item.css'

const UsersListItem = (props) => {
    const user = props.card;
    return (
        <li className="user__item user">
            <div className="user__avatar">
                <img src={user.avatar} alt={user.first_name} width="130" height="130"/>
            </div>
            <div className="user__content">
                <p className="user__name"><span className="desc">Name:</span> {user.first_name}</p>
                <p className="user__surname"><span className="desc">Surname:</span> {user.last_name}</p>
                <p className="user__email"><span className="desc">E-mail:</span><a href="/" className="user__email-link"> {user.email}</a></p>
            </div>
        </li>
    );
};

export default UsersListItem;