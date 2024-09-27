import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Flourish2 from "./fourishes/flourish2";
import Flourish2Half from "./fourishes/flourish2Half";

import {
    spine,
    firstFlourish,
    dateWrapper,
    dateLabel,
    info,
    postTitle,
    postExcerpt,
    empty,
    emptyWrapper,
    secondFlourish,
    green,
    brown,
    blue,
    red,
} from "./book.module.css";

import { navigate } from "gatsby";

const colors = {
    green: green,
    blue: blue,
    brown: brown,
    red: red,
};

const Book = ({ title, date, excerpt, to, color }) => {
    const colorClass = colors[color] ?? brown;

    return (
        <div className={`${spine} ${colorClass}`} onClick={() => navigate(to)}>
            <div className={firstFlourish}>
                <Flourish2 />
            </div>
            <div className={dateWrapper}>
                <div className={dateLabel}>{date}</div>
            </div>
            <div className={info}>
                <h2 className={postTitle}>{title}</h2>
                <p className={postExcerpt}>{excerpt}</p>
            </div>
            <div className={emptyWrapper}>
                <div className={empty}>{""}</div>
            </div>
            <div className={secondFlourish}>
                <Flourish2Half />
            </div>
        </div>
    );
};

export default Book;
