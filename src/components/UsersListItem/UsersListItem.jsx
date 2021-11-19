import React from "react";
import { useDispatch} from "react-redux";
import { SHOW_POPUP } from "../MainPage/store/main-page.action";
import './UserListItem.css';

const UsersListItem = (props) => {  
    const user = props.card;
    const dispatch = useDispatch();

    const openPopup = (evt) =>{
        evt.preventDefault();
        dispatch({type:SHOW_POPUP, payload:{visually:true, userId:user.id}})
    }

    return (
        <li className="user__item user">
            <button type="button" className="user__avatar" onClick={openPopup}>
                <img src={user.avatar} alt={user.name} width="130" height="130"/>
            </button>
            <div className="user__content">
                <a href="/" className="user__name user-link" onClick={openPopup}><h3>{user.name} {user.surname}</h3></a>
                <a href="https://mail.ru/" className="user__email-link">{user.email}</a>
            </div>
            {user.updatedAt ? <span className="user__change-data">Change date:{user.updatedAt}</span> : ""}
        </li>
    );
};

export default UsersListItem;