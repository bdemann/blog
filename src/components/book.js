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
} from "./book.module.css";

const Book = ({ title, date, excerpt }) => {
    return (
        <div className={spine}>
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
