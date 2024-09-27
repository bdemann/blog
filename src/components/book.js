import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Flourish2 from "./fourishes/flourish2";
import Flourish2Half from "./fourishes/flourish2Half";
import Flourish3 from "./fourishes/flourish3";
import Flourish3Half from "./fourishes/flourish3Half";
import Flourish4 from "./fourishes/flourish4";
import Flourish4Half from "./fourishes/flourish4Half";

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
    green: { color: green, flourish: [Flourish3, Flourish3Half] },
    blue: { color: blue, flourish: [Flourish4, Flourish4Half] },
    brown: { color: brown, flourish: [Flourish2, Flourish2Half] },
    red: { color: red, flourish: [Flourish3, Flourish3Half] },
};

const Book = ({ title, date, excerpt, to, color }) => {
    const colorClass = colors[color].color ?? brown;
    const [FlourishComponent, FlourishHalfComponent] = colors[color]
        ?.flourish || [Flourish2, Flourish2Half];

    return (
        <div className={`${spine} ${colorClass}`} onClick={() => navigate(to)}>
            <div className={firstFlourish}>
                <FlourishComponent />
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
                <FlourishHalfComponent />{" "}
            </div>
        </div>
    );
};

export default Book;
