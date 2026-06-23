import * as React from "react";
import { flourishContainer } from "./flourish.module.css";

/* The terminal diamond — the shared unit that ties every register
   together (edge caps, central marks, Satire lozenges all use it). */
const Diamond = () => (
    <path d="M50 14 L56 24 L50 34 L44 24 Z" fill="currentColor" stroke="none" />
);

/* Three finial variants so no two registers wear the same ornament.
   All keep the diamond for family unity, but vary the flourish below it. */
const ornaments = {
    // a — curved curls ending in dots
    a: (
        <g>
            <Diamond />
            <path d="M50 36 Q45 54 31 62" />
            <path d="M50 36 Q55 54 69 62" />
            <circle cx="31" cy="62" r="2.6" fill="currentColor" stroke="none" />
            <circle cx="69" cy="62" r="2.6" fill="currentColor" stroke="none" />
        </g>
    ),
    // b — bold volute scrolls (ornate)
    b: (
        <g>
            <Diamond />
            <path d="M50 38 C40 40 31 47 34 56 C36 63 45 63 45 56 C45 52 41 52 41 55" />
            <path d="M50 38 C60 40 69 47 66 56 C64 63 55 63 55 56 C55 52 59 52 59 55" />
        </g>
    ),
    // c — wide sunburst of straight rays
    c: (
        <g>
            <Diamond />
            <path d="M50 38 L50 66" />
            <path d="M50 38 L36 62" />
            <path d="M50 38 L64 62" />
            <path d="M50 38 L26 52" />
            <path d="M50 38 L74 52" />
            <circle cx="50" cy="38" r="2.6" fill="currentColor" stroke="none" />
        </g>
    ),
};

// Frame modes: full ornament (`variant` a/b/c), `minimal` (diamond
// terminals only), or `bare` (nothing, for full-length / standout motifs).
const EmblemFrame = ({ children, bare = false, minimal = false, variant = "a" }) => {
    const top = minimal ? <Diamond /> : ornaments[variant];
    return (
        <div className={flourishContainer}>
            <svg
                viewBox="0 0 100 320"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {!bare && (
                    <>
                        {top}
                        <g transform="translate(0,320) scale(1,-1)">{top}</g>
                    </>
                )}
                {children}
            </svg>
        </div>
    );
};

export default EmblemFrame;
