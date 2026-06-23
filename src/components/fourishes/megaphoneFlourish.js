import * as React from "react";
import EmblemFrame from "./emblemFrame";

/* Soapbox — two megaphones rotated 90° (upper shouts up, lower shouts
   down), each with small nested chevrons for sound waves. The framed
   diamond finials at top & bottom act as centripetal terminals that
   pull the eye back to center after the megaphones throw it outward. */
const MegaphoneFlourish = () => (
    <EmblemFrame variant="c">
        {/* upper megaphone, shouting up */}
        <path d="M44 128 L34 98 L66 98 L56 128 Z" />
        <path d="M46 128 L46 136 L54 136 L54 128" />
        <path d="M40 92 Q50 85 60 92" />
        <path d="M34 83 Q50 74 66 83" />

        {/* center diamond (matches the terminal diamonds) */}
        <path d="M50 150 L56 160 L50 170 L44 160 Z" fill="currentColor" stroke="none" />

        {/* lower megaphone, shouting down */}
        <path d="M44 192 L34 222 L66 222 L56 192 Z" />
        <path d="M46 192 L46 184 L54 184 L54 192" />
        <path d="M40 228 Q50 235 60 228" />
        <path d="M34 237 Q50 246 66 237" />
    </EmblemFrame>
);

export default MegaphoneFlourish;
