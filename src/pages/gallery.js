import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h1 className={pageHeader}>Coming Soon!</h1>
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="About"></Seo>
        <Fonts></Fonts>
    </>
);

export default AboutPage;
