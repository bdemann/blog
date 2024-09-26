import React from "react";

import {
    dateContainer,
    leftLine,
    rightLine,
    date as dateStyle,
    title as titleStyle,
} from "./article-header.module.css";

const ArticleHeader = ({ title, date }) => {
    return (
        <>
            <h1 className={titleStyle}>{title}</h1>
            <div className={dateContainer}>
                <hr className={leftLine} />
                <span className={dateStyle}>{date}</span>
                <hr className={rightLine} />
            </div>
        </>
    );
};

export default ArticleHeader;
