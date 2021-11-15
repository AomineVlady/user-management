import React from "react";
import { useParams } from 'react-router-dom';
import './popup.css';
import { Link } from "react-router-dom";
import { pathList } from "../../common/constants.js";
import SvgIcon from "../../common/svg-sprites.jsx";
import getUser from "../../common/utils.js";

const Popup = (props) => {
    const usersList = props.userList;
    const { id } = useParams();
    const user = getUser(usersList, +id);
    const changePath = `/change-data/${user.id}`;

    return (
        <div className="popup overlay">
            <div className="popup__content">
                <Link to={pathList.main} className="popup__close-btn"><SvgIcon id={'cross'} />
                </Link>
                <div className="popup__picture">
                    <img src={user.avatar} alt="avatar of user" width="130" height="130" />
                </div>

                <div className="popup__content-data">
                    <p className="popup__content-name"><span className="field__desc">Name:</span> {user.name}</p>
                    <p className="popup__content-surname"><span className="field__desc">Surname:</span> {user.surname}</p>
                    <p className="popup__content-email"><span className="field__desc">Email:</span>
                        <a href="/" className="user__email-link"> {user.email}</a>
                    </p>
                </div>
                <Link to={changePath} className="user__change-btn"><SvgIcon id={'settings'} /></Link>
            </div>
        </div>
    )
}

export default Popup;