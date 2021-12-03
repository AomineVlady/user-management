import React, { useEffect } from "react";
import './Popup.css';
import { Link } from "react-router-dom";
import { pathList } from "../../../common/constants.js";
import SvgIconClose from "../../../common/svgIcons/SvgIconClose";
import SvgIconSettings from "../../../common/svgIcons/SvgIconSettings";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequested } from './store/popup.action-creators'
import { SHOW_POPUP } from "../../MainPage/store/main-page.action"

const Popup = () => {

    const user = useSelector(state => state.popupReducer.user);
    const showPopup = useSelector(state => state.mainPageReducer.showPopup);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserRequested(showPopup.userId))
    }, [dispatch, showPopup.userId])

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
                <button type="button" className="popup__close-btn" onClick={closePopup}><SvgIconClose />
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
                <Link to={pathList.change_data} className="user__change-btn"><SvgIconSettings /></Link>
            </div> : null}
        </div>
    )
}


export default Popup;