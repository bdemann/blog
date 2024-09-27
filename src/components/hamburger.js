import React from "react";
import { menuToggle, hamburger } from "./hamburger.module.css";

const Hamburger = ({ openMenu }) => {
    return (
        <div
            className={menuToggle}
            onClick={openMenu}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    openMenu();
                }
            }}
            role="button"
            tabIndex={0}
        >
            <div className={hamburger}></div>
            <div className={hamburger}></div>
            <div className={hamburger}></div>
        </div>
    );
};

export default Hamburger;
