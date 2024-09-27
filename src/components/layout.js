import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
    footerImage,
    footerTitle,
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
    footer,
    navContainer,
    showNavContainer,
    navContainerStart,
    navContainerEnd,
} from "./layout.module.css";
import Hamburger from "./hamburger";
import Exit from "./exit";

const Layout = ({ pageTitle, children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <nav
                        className={`${navContainer} ${navContainerStart} ${
                            menuOpen ? showNavContainer : ""
                        }`}
                    >
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </nav>
                    <h1 className={siteTitle}>
                        {data.site.siteMetadata.title}
                    </h1>
                    <nav
                        className={`${navContainer} ${navContainerEnd} ${
                            menuOpen ? showNavContainer : ""
                        }`}
                    >
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                        <a
                            href="https://zarahemlapress.com/"
                            className={navLinkText}
                        >
                            Store
                        </a>
                    </nav>
                    <Hamburger openMenu={() => setMenuOpen(true)} />
                </div>
                <Exit closeMenu={() => setMenuOpen(false)} />
            </header>
            <main className={mainContainer}>{children}</main>
            <footer className={footer}>
                <StaticImage
                    className={footerImage}
                    width="150px"
                    alt="author"
                    src="../images/book.png"
                />
                <div>
                    <h4 className={footerTitle}>The Benjamin DeMann Blog</h4>
                    Reach out on X:{" "}
                    <a href="https://x.com/b_demann">@b_demann</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
