import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";

import {
    container,
    heading,
    navLinkItem,
    navLinks,
    navLinkText,
    siteTitle,
    header,
    innerHeader,
    mainContainer,
    topPadding,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className={container}>
            <header className={header}>
                <div className={innerHeader}>
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>
                                    Home
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <h1 className={siteTitle}>
                        {data.site.siteMetadata.title}
                    </h1>
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={navLinkText}>
                                    Blog
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <a
                                    href="https://zarahemlapress.com/"
                                    className={navLinkText}
                                >
                                    Store
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={mainContainer}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
