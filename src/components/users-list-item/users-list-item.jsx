import React from "react";
import { Link } from "react-router-dom";
import './user-list-item.css';

const UsersListItem = (props) => {  
    const user = props.card;
    const popupPath = `/popup/${user.id}`
    return (
        <li className="user__item user">
            <Link to={popupPath}><div className="user__avatar">
                <img src={user.avatar} alt={user.name} width="130" height="130"/>
            </div>
            </Link>
            <div className="user__content">
                <Link to={popupPath} className="user__name user-link"><h3>{user.name} {user.surname}</h3></Link>
                <a href="https://mail.ru/" className="user__email-link">{user.email}</a>
            </div>
        </li>
    );
};

export default UsersListItem;