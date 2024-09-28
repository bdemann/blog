import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h1 className={pageHeader}>Disclaimer</h1>
            <p>
                The views and opinions expressed on this blog are solely my own
                and do not represent the official positions or teachings of The
                Church of Jesus Christ of Latter-day Saints, the Grand Lodge of
                Utah, or any other organization I may be associated with. While
                I strive for accuracy in all my research and discussions, my
                posts are intended to reflect my personal journey and evolving
                thoughts.
            </p>
            <p>
                Nothing on this blog should be considered professional advice,
                including but not limited to financial, legal, or spiritual
                advice. The content here is for informational and reflective
                purposes only. I encourage readers to do their own research,
                think critically, and seek out additional sources when forming
                their own opinions or making decisions.
            </p>
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
