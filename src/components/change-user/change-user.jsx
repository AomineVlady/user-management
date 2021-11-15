import React from "react";
import './change-user.css';
import getUser from "../../common/utils";
import { Link, useParams } from 'react-router-dom';
import { pathList } from "../../common/constants";

const ChangeUser = props => {
    const usersList = props.userList;
    const { id } = useParams();
    const activeUser = getUser(usersList, +id);
    return (
        <div className="overlay">
            <form action="/" className="change__form">
                <div className="change__content">
                    <label className="change__form-data" htmlFor="user-name">Name:
                        <input type="text" id="user-name" defaultValue={activeUser.name}/>
                    </label>
                    <label className="change__form-data" htmlFor="user-surname">Surname:
                        <input type="text" id="user-surname" defaultValue={activeUser.surname}/>
                    </label>
                </div>
                <div className="change__buttons">
                    <button type="submit" className="change__submit-btn">Change</button>
                    <Link to={pathList.popup} className="change__submit-btn">Prev</Link>
                </div>
            </form>
        </div>
    )
}

export default ChangeUser;