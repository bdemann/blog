import * as React from "react";
import EmblemFrame from "./emblemFrame";

/* Meta — a classic gilt-tooled book panel: a central fleuron (lozenge
   + corner scrolls) with bosses on a spine rule, capped by the family
   finials. Abstract bookbinding ornament. Export name kept as
   BookPenFlourish so book.js / the preview wiring is unchanged. */
const BookPenFlourish = () => (
    <EmblemFrame variant="a">
        {/* gilt spine rule */}
        <path d="M50 66 L50 254" />

        {/* bosses on the rule */}
        <path d="M50 100 L55 106 L50 112 L45 106 Z" fill="currentColor" stroke="none" />
        <path d="M50 208 L55 214 L50 220 L45 214 Z" fill="currentColor" stroke="none" />

        {/* central fleuron */}
        <path d="M50 144 L58 160 L50 176 L42 160 Z" fill="currentColor" stroke="none" />
        <path d="M50 146 C46 137 40 135 37 139" />
        <path d="M50 146 C54 137 60 135 63 139" />
        <path d="M50 174 C46 183 40 185 37 181" />
        <path d="M50 174 C54 183 60 185 63 181" />
        <circle cx="37" cy="139" r="2" fill="currentColor" stroke="none" />
        <circle cx="63" cy="139" r="2" fill="currentColor" stroke="none" />
        <circle cx="37" cy="181" r="2" fill="currentColor" stroke="none" />
        <circle cx="63" cy="181" r="2" fill="currentColor" stroke="none" />
    </EmblemFrame>
);

export default BookPenFlourish;
