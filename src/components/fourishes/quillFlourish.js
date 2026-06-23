import * as React from "react";
import EmblemFrame from "./emblemFrame";

/* Response — opening & closing quotation marks set symmetrically around
   a central diamond, inside the family finial frame. Export name kept as
   QuillFlourish so the book.js / preview wiring is unchanged. */
const quoteStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "95px",
};

const QuillFlourish = () => (
    <EmblemFrame variant="b">
        <text
            x="50"
            y="153"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            style={quoteStyle}
        >
            &#8220;
        </text>
        <path d="M50 150 L56 160 L50 170 L44 160 Z" fill="currentColor" stroke="none" />
        <text
            x="50"
            y="261"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            style={quoteStyle}
        >
            &#8221;
        </text>
    </EmblemFrame>
);

export default QuillFlourish;
