import * as React from "react";
import EmblemFrame from "./emblemFrame";

/* Devotional — a column of flames, rotated 90° to lie with the book.
   Alternating flames are mirrored and invert solid/outline so the
   column reads as a pattern, not a strict repeat. */
const flames = [85, 122, 159, 196, 233];

const outer = (cy) =>
    `M50 ${cy + 16} C36 ${cy + 16} 34 ${cy - 2} 45 ${cy - 13} C51 ${cy - 19} 49 ${cy - 23} 50 ${cy - 28} C53 ${cy - 22} 62 ${cy - 8} 63 ${cy + 2} C63 ${cy + 11} 57 ${cy + 16} 50 ${cy + 16} Z`;

const inner = (cy) =>
    `M50 ${cy + 10} C43 ${cy + 10} 42 ${cy} 47 ${cy - 7} C50 ${cy - 11} 49 ${cy - 13} 50 ${cy - 15} C52 ${cy - 11} 56 ${cy - 4} 56 ${cy + 2} C56 ${cy + 7} 53 ${cy + 10} 50 ${cy + 10} Z`;

const Flame = ({ cy, solid, flip }) => (
    <g transform={`rotate(${flip ? 90 : -90} 50 ${cy})`}>
        <path
            d={outer(cy)}
            fill={solid ? "currentColor" : "none"}
            stroke="currentColor"
        />
        {!solid && <path d={inner(cy)} fill="currentColor" stroke="none" />}
    </g>
);

const FlameFlourish = () => (
    <EmblemFrame minimal>
        {flames.map((cy, i) => (
            <Flame key={cy} cy={cy} solid={i % 2 === 1} flip={i % 2 === 1} />
        ))}
    </EmblemFrame>
);

export default FlameFlourish;
