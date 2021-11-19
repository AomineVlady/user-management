import React from "react";
import "./PaginationList.css";
import PaginationListItem from "../PaginationListItem/PaginationListItem.jsx";

const PaginationList = ({ pageCount }) => {

    const pagesList = [];
    for (let i = 1; i < pageCount + 1; ++i) {
        pagesList.push(i)
    }

    
    return (
        <ul className="pagination__list">
            {pagesList.map(item => <PaginationListItem key={+item} pageNumber={+item}/>
            )}
        </ul>
    )
}

export default PaginationList;