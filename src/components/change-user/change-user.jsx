import React from "react";
import './change-user.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pathList } from "../../common/constants";

const ChangeUser = () => {
    const user = useSelector(state => state.popupReducer.user)
    console.log(user)
    return (
        <div className="overlay">
            <form action="/" className="change__form">
                <div className="change__content">
                    <label className="change__form-data" htmlFor="user-name">Name:
                        <input type="text" id="user-name" defaultValue={user.first_name} />
                    </label>
                    <label className="change__form-data" htmlFor="user-surname">Surname:
                        <input type="text" id="user-surname" defaultValue={user.last_name} />
                    </label>
                </div>
                <div className="change__buttons">
                    <Link to={pathList.main} className="change__submit-btn">back</Link>
                    <button type="submit" className="change__submit-btn">to change</button>
                </div>
            </form>
        </div>
    )
}

export default ChangeUser;