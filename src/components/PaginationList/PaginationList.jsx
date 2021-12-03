import React from "react";
import "./PaginationList.css";
import PaginationListItem from "../PaginationListItem/PaginationListItem.jsx";
import PropTypes from "prop-types";

const PaginationList = ({ pageCount }) => {
    const getPaginationList = () => {
        const pagesList = [];
        for (let i = 1; i < pageCount + 1; ++i) {
            pagesList.push(<PaginationListItem key={i} pageNumber={i} />);
        }
        return pagesList;
    };

    return (
        <ul className="pagination__list">
            {getPaginationList()}
        </ul>
    );
};

PaginationList.propTypes = {
    pageCount: PropTypes.number.isRequired,
};

export default PaginationList;
