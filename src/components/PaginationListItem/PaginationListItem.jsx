import React from "react";
import "./PaginationListItem.css";
import { GET_USERS_REQUESTED, SET_CURRENT_PAGE } from "../MainPage/store/main-page.action";
import PropTypes from "prop-types";
import store from "../../store/store";

class PaginationListItem extends React.PureComponent{
    state = store.getState().mainPageReducer;
    constructor(props){
        super(props);
        this.pageNumber = this.props.pageNumber;
    }

    handleTogglePage = (evt) => {
        evt.preventDefault();
        store.dispatch({ type: GET_USERS_REQUESTED, payload: `http://localhost:5000/api/users/?page=${+evt.target.text}`});
        store.dispatch({ type: SET_CURRENT_PAGE, payload: +evt.target.text });
        store.subscribe(() => this.setState(store.getState().mainPageReducer))
    };

    render(){
        return(
            <li className="pagination__item">
                <a href="/" onClick={this.handleTogglePage.bind(this)}>{this.pageNumber}</a>
            </li>
        )
    };  
};

PaginationListItem.propTypes = {
    pageNumber: PropTypes.number.isRequired,
};

export default PaginationListItem ;