import React from "react";
import { closeButton } from "./exit.module.css";

const Exit = ({ closeMenu }) => {
    return (
        <span
            className={closeButton}
            onClick={closeMenu}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    closeMenu();
                }
            }}
            role="button"
            tabIndex={0}
        >
            X
        </span>
    );
};

export default Exit;
