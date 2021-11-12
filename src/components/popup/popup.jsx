import React from "react";
import '../../common/svg-sprites.svg';

const Popup = (props) => {
    return (
        <div className="popup">
            <div className="popup__content">
                <button class="popup__close" type="button" aria-label="close the popup">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="#close-btn" />
                    </svg>
                </button>
                <div className="popup__picture">
                    <img src='img/img.png' alt="title-picture" width="130" height="130" />
                </div>

                <div className="popup__content-data">
                    <p className="user__name"><span className="desc">Name:</span> name</p>
                    <p className="user__surname"><span className="desc">Surname:</span> surname</p>
                    <p className="user__email"><span className="desc">E-mail:</span><a href="/" className="user__email-link"> email</a></p>
                </div>
            </div>
        </div>
    )
}