import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};

const paragraphStyles = {
    marginBottom: 48,
};

const NotFoundPage = () => {
    return (
        <Layout>
            <main style={pageStyles}>
                <h1 style={headingStyles}>Page not found</h1>
                <p style={paragraphStyles}>
                    The page you are looking for is even more esoteric than what
                    I write about.
                    <br />
                    <Link to="/">Return home</Link>
                </p>
            </main>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => (
    <>
        <Seo title="Blog"></Seo>
        <Fonts></Fonts>
    </>
);
