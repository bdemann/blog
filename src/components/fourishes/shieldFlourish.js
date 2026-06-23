import * as React from "react";
import EmblemFrame from "./emblemFrame";

/* Apologetics — three shields with crosses, rotated 90° to lie with
   the book, stacked into a heraldic band. */
const Shield = ({ cy }) => (
    <g transform={`rotate(-90 50 ${cy})`}>
        <path
            d={`M35 ${cy - 22} L65 ${cy - 22} L65 ${cy - 6} C65 ${cy + 10} 57 ${cy + 16} 50 ${cy + 20} C43 ${cy + 16} 35 ${cy + 10} 35 ${cy - 6} Z`}
        />
        <path d={`M50 ${cy - 16} L50 ${cy + 12}`} />
        <path d={`M41 ${cy - 5} L59 ${cy - 5}`} />
    </g>
);

const ShieldFlourish = () => (
    <EmblemFrame minimal>
        <Shield cy={92} />
        <Shield cy={160} />
        <Shield cy={228} />
    </EmblemFrame>
);

export default ShieldFlourish;
