import * as React from "react";

import Fonts from "../components/fonts";
import Seo from "../components/seo";

import FlameFlourish from "../components/fourishes/flameFlourish";
import ShieldFlourish from "../components/fourishes/shieldFlourish";
import QuillFlourish from "../components/fourishes/quillFlourish";
import MegaphoneFlourish from "../components/fourishes/megaphoneFlourish";
import JesterFlourish from "../components/fourishes/jesterFlourish";
import BookPenFlourish from "../components/fourishes/bookPenFlourish";

import {
    page,
    heading,
    subheading,
    grid,
    card,
    spine,
    label,
    posture,
} from "./flourish-preview.module.css";

// Dev-only review page for the Pass 2 register emblems. Not linked in nav.
const registers = [
    {
        name: "Devotional",
        posture: "sincere faith",
        gradient: "linear-gradient(to bottom,#2a200a,#403211,#2a200a)",
        Emblem: FlameFlourish,
    },
    {
        name: "Apologetics",
        posture: "defending the faith",
        gradient: "linear-gradient(to bottom,#0e0e21,#151633,#0e0e21)",
        Emblem: ShieldFlourish,
    },
    {
        name: "Response",
        posture: "reacting to something",
        gradient: "linear-gradient(to bottom,#0c1f1c,#14302b,#0c1f1c)",
        Emblem: QuillFlourish,
    },
    {
        name: "Soapbox",
        posture: "unprompted strong opinion",
        gradient: "linear-gradient(to bottom,#210e0e,#331515,#210e0e)",
        Emblem: MegaphoneFlourish,
    },
    {
        name: "Satire",
        posture: "it's a joke",
        gradient: "linear-gradient(to bottom,#1e0e21,#2c1533,#1e0e21)",
        Emblem: JesterFlourish,
    },
    {
        name: "Meta",
        posture: "about the blog itself",
        gradient: "linear-gradient(to bottom,#2e2b26,#403c34,#2e2b26)",
        Emblem: BookPenFlourish,
    },
];

const FlourishPreview = () => (
    <div className={page}>
        <h1 className={heading}>Register Emblems</h1>
        <p className={subheading}>
            Pass 2 preview — one bespoke flourish per register, shown on its
            spine color. Not linked in the nav.
        </p>
        <div className={grid}>
            {registers.map(({ name, posture: p, gradient, Emblem }) => (
                <div className={card} key={name}>
                    <div className={spine} style={{ backgroundImage: gradient }}>
                        <Emblem />
                    </div>
                    <div className={label}>{name}</div>
                    <div className={posture}>{p}</div>
                </div>
            ))}
        </div>
    </div>
);

export const Head = () => (
    <>
        <Seo title="Flourish Preview"></Seo>
        <Fonts></Fonts>
    </>
);

export default FlourishPreview;
