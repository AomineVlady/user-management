import React from "react";
import { useParams } from 'react-router-dom';
import './popup.css';
import { Link } from "react-router-dom";
import { pathList } from "../../common/common.js";

const Popup = (props) => {
    const usersList = props.userList;
    const { id } = useParams();
    const getUser = (usersList, id) => usersList.find(user => user.id === id);
    const user = getUser(usersList, +id);

    return (
        <div className="popup">
            <div className="popup__content">
                <Link to={pathList.main} className="popup__close" >Close
                </Link>
                <div className="popup__picture">
                    <img src={user.avatar} alt="title-picture" width="130" height="130" />
                </div>

                <div className="popup__content-data">
                    <p className="user__name">{user.name}</p>
                    <p className="user__surname">{user.surname}</p>
                    <p className="user__email"><span className="desc">E-mail:</span><a href="/" className="user__email-link">{user.email}</a></p>
                </div>
                <Link to={pathList.change_data}>Settings</Link>
            </div>
        </div>
    )
}

export default Popup;