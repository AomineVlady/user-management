import React, { useEffect } from "react";
import './popup.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { pathList } from "../../../common/constants.js";
import SvgIcon from "../../../common/svg-sprites.jsx";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER } from './store/popup.action'
import { SHOW_POPUP } from "../../main-page/store/main-page.action"

const Popup = () => {
    let user = useSelector(state => state.popupReducer.user);
    const showPopup = useSelector(state => state.mainPageReducer.showPopup);
    const dispatch = useDispatch();

    const getUser = async () => {
        return await axios.get(`https://reqres.in/api/users/${showPopup.userId}`).then(
            (response) => {
                dispatch({ type: GET_USER, payload: response.data.data })
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getUser();
    }, [])

    const closePopup = () => {
        dispatch({
            type: SHOW_POPUP,
            payload: {
                visually: false,
                userId: null,
            }
        })
    }

    return (
        <div className="popup overlay">
            {user ? <div className="popup__content">
                <button type="button" className="popup__close-btn" onClick={closePopup}><SvgIcon id={'cross'} />
                </button>
                <div className="popup__picture">
                    <img src={user.avatar} alt="avatar of user" width="130" height="130" />
                </div>

                <div className="popup__content-data">
                    <p className="popup__content-name"><span className="field__desc">Name:</span> {user.first_name}</p>
                    <p className="popup__content-surname"><span className="field__desc">Surname:</span> {user.last_name}</p>
                    <p className="popup__content-email"><span className="field__desc">Email:</span>
                        <a href="https://mail.ru/" className="user__email-link"> {user.email}</a>
                    </p>
                </div>
                <Link to={pathList.change_data} className="user__change-btn"><SvgIcon id={'settings'} /></Link>
            </div> : null}
        </div>
    )
}


export default Popup;