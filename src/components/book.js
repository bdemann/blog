import * as React from "react";
import Flourish2 from "./fourishes/flourish2";
import Flourish2Half from "./fourishes/flourish2Half";
import Flourish3 from "./fourishes/flourish3";
import Flourish3Half from "./fourishes/flourish3Half";
import Flourish4 from "./fourishes/flourish4";
import Flourish4Half from "./fourishes/flourish4Half";

import FlameFlourish from "./fourishes/flameFlourish";
import ShieldFlourish from "./fourishes/shieldFlourish";
import QuillFlourish from "./fourishes/quillFlourish";
import MegaphoneFlourish from "./fourishes/megaphoneFlourish";
import JesterFlourish from "./fourishes/jesterFlourish";
import BookPenFlourish from "./fourishes/bookPenFlourish";

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
    amber,
    navy,
    verdigris,
    oxblood,
    plum,
    bookLink,
} from "./book.module.css";

import { Link } from "gatsby";

// Legacy color → flourish mapping (posts still on the old `color` field).
const colors = {
    green: { color: green, flourish: [Flourish3, Flourish3Half] },
    blue: { color: blue, flourish: [Flourish4, Flourish4Half] },
    brown: { color: brown, flourish: [Flourish2, Flourish2Half] },
    red: { color: red, flourish: [Flourish3, Flourish3Half] },
};

// New register → color + emblem mapping (posts on the `category` field).
const registers = {
    devotional: { className: amber, Emblem: FlameFlourish },
    apologetics: { className: navy, Emblem: ShieldFlourish },
    response: { className: verdigris, Emblem: QuillFlourish },
    soapbox: { className: oxblood, Emblem: MegaphoneFlourish },
    satire: { className: plum, Emblem: JesterFlourish },
    meta: { className: brown, Emblem: BookPenFlourish },
};

const Book = ({ title, date, excerpt, to, color, category }) => {
    const register = (category && registers[category]) || null;

    const colorClass = register
        ? register.className
        : colors[color]?.color ?? brown;
    const FirstFlourish = register
        ? register.Emblem
        : colors[color]?.flourish?.[0] ?? Flourish2;
    const SecondFlourish = register
        ? register.Emblem
        : colors[color]?.flourish?.[1] ?? Flourish2Half;

    return (
        <Link className={bookLink} to={to}>
            <div className={`${spine} ${colorClass}`}>
                <div className={firstFlourish}>
                    <FirstFlourish />
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
                    <SecondFlourish />
                </div>
            </div>
        </Link>
    );
};

export default Book;
