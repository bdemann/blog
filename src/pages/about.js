import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there!</p>
            <h2>Disclaimer</h2>
            <p>
                The views expressed in this blog are solely those of the author
                and do not necessarily reflect the official views or positions
                of The Church of Jesus Christ of Latter-day Saints. This blog is
                a personal endeavor, and the author's opinions, interpretations,
                and understandings are subject to their own individual
                perspective and study. Readers should be aware that the author's
                views may differ from official church teachings, doctrines, or
                policies. For official information and resources regarding the
                LDS Church, please refer to the official church website or
                consult with local church leaders.
            </p>
        </Layout>
    );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
