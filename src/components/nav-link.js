import React from "react";
import { navigate } from "gatsby"; // Import Gatsby's navigate function

const NavLink = ({ to, callback, children }) => {
    const handleEvent = (e) => {
        if (callback) {
            console.log("hello");
            e.preventDefault(); // Prevent default only when a callback is present
            callback(e); // Run the custom callback
            navigate(to); // Use Gatsby's navigate to move to the new page
        }
    };

    return (
        <a
            href={to}
            onClick={callback ? handleEvent : undefined} // Only use handleEvent if a callback is present
            onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && callback) {
                    handleEvent(e);
                }
            }}
            role="button"
            tabIndex={0}
        >
            {children}
        </a>
    );
};

export default NavLink;
