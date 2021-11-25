import React, { useState } from "react";
import "./PaginationListItem.css";
import { GET_USERS_REQUESTED, SET_CURRENT_PAGE } from "../MainPage/store/main-page.action";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const PaginationListItem = ({pageNumber}) => {
    const dispatch = useDispatch();

    const togglePage = (evt) => {
        evt.preventDefault();
        dispatch({ type: GET_USERS_REQUESTED, payload: `http://localhost:5000/api/users/?page=${+evt.target.text}`});
        dispatch({ type: SET_CURRENT_PAGE, payload: +evt.target.text });
    };

    return (
        <li className="pagination__item">
            <a href="/" onClick={togglePage}>{pageNumber}</a>
        </li>
    );
};

PaginationListItem.propTypes = {
    pageNumber: PropTypes.number.isRequired,
};

export default PaginationListItem;