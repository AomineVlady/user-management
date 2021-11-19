import React from "react";
import "./PaginationListItem.css";
import { GET_USERS_REQUESTED, SET_CURRENT_PAGE } from "../MainPage/store/main-page.action";
import { useDispatch } from "react-redux";

const PaginationListItem = (props) => {
    const dispatch = useDispatch();

    const togglePage = (evt) => {
        evt.preventDefault();
        dispatch({ type: GET_USERS_REQUESTED, payload: `https://reqres.in/api/users?page=${+evt.target.text}` })
        dispatch({ type: SET_CURRENT_PAGE, payload: +evt.target.text });
    }

    return (
        <li className="pagination__item">
            <a href="/" onClick={togglePage}>{props.pageNumber}</a>
        </li>
    )
}

export default PaginationListItem;