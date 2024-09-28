import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
    footerLinks,
    footerImage,
    footerTitle,
    container,
    navLink,
    siteTitle,
    header,
    innerHeader,
    mainContainer,
    footer,
    navContainer,
    fullScreenMenu,
    overlay,
    hamburgerMenuOpen,
} from "./layout.module.css";
import Hamburger from "./hamburger";
import Exit from "./exit";
import NavLink from "./nav-link";

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
                    <nav className={navContainer}>
                        <Link to="/" className={navLink}>
                            Home
                        </Link>
                        <Link to="/about" className={navLink}>
                            About
                        </Link>
                    </nav>
                    <h1 className={siteTitle}>
                        {data.site.siteMetadata.title}
                    </h1>
                    <nav className={navContainer}>
                        <Link to="/blog" className={navLink}>
                            Blog
                        </Link>
                        <a
                            href="https://zarahemlapress.com/"
                            className={navLink}
                        >
                            Store
                        </a>
                    </nav>
                    <Hamburger openMenu={() => setMenuOpen(true)} />
                </div>

                {/* Full-screen mobile menu */}
                {menuOpen && (
                    <div className={fullScreenMenu}>
                        <div
                            className={overlay}
                            onClick={() => setMenuOpen(false)}
                        />
                        <nav className={hamburgerMenuOpen}>
                            <Exit closeMenu={() => setMenuOpen(false)} />
                            <NavLink
                                to="/"
                                className={navLink}
                                callback={() => setMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={navLink}
                                callback={() => setMenuOpen(false)}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={navLink}
                                callback={() => setMenuOpen(false)}
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="https://zarahemlapress.com/"
                                className={navLink}
                                callback={() => setMenuOpen(false)}
                            >
                                Store
                            </NavLink>
                        </nav>
                    </div>
                )}
            </header>
            <main className={mainContainer}>{children}</main>
            <footer className={footer}>
                <StaticImage
                    className={footerImage}
                    width="150px"
                    alt="author"
                    src="../images/book.png"
                />
                <div className={footerLinks}>
                    <Link to="/about" className={navLink}>
                        About
                    </Link>
                    <Link to="/disclaimer" className={navLink}>
                        Disclaimer
                    </Link>
                    <Link to="/use-of-ai" className={navLink}>
                        Use of AI
                    </Link>
                    <Link to="https://zarahemlapress.com/" className={navLink}>
                        Store
                    </Link>
                    <Link to="/tags" className={navLink}>
                        All Tags
                    </Link>
                </div>
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
