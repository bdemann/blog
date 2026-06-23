import * as React from "react";
import EmblemFrame from "./emblemFrame";

/* Satire — harlequin diamonds repeating down the spine. Filled and
   outline alternate, with a size rhythm and small stitch marks. */
const rows = [46, 94, 142, 190, 238, 286];

const JesterFlourish = () => (
    <EmblemFrame bare>
        {rows.map((y, i) => {
            const filled = i % 2 === 0;
            const w = filled ? 18 : 13;
            const h = filled ? 22 : 17;
            return (
                <path
                    key={y}
                    d={`M50 ${y - h} L${50 + w} ${y} L50 ${y + h} L${50 - w} ${y} Z`}
                    fill={filled ? "currentColor" : "none"}
                    stroke="currentColor"
                />
            );
        })}
        {[70, 118, 166, 214, 262].map((y) => (
            <path
                key={y}
                d={`M50 ${y - 3} L53 ${y} L50 ${y + 3} L47 ${y} Z`}
                fill="currentColor"
                stroke="none"
            />
        ))}
    </EmblemFrame>
);

export default JesterFlourish;
