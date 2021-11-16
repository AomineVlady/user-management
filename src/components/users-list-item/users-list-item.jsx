import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SHOW_POPUP } from "../main-page/store/main-page.action";
import './user-list-item.css';

const UsersListItem = (props) => {  
    const user = props.card;
    const dispatch = useDispatch();

    const openPopup = () =>{
        dispatch({type:SHOW_POPUP, payload:{visually:true, userId:user.id}})
    }

    return (
        <li className="user__item user">
            <div className="user__avatar" onClick={openPopup}>
                <img src={user.avatar} alt={user.name} width="130" height="130"/>
            </div>
            <div className="user__content">
                <span className="user__name user-link" onClick={openPopup}><h3>{user.name} {user.surname}</h3></span>
                <a href="https://mail.ru/" className="user__email-link">{user.email}</a>
            </div>
        </li>
    );
};

export default UsersListItem;