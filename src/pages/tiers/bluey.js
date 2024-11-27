import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";
import TierTable from "../../components/tier-table";
import blueyData from "../../data/tiers/bluey.json";
import { pageHeader } from "../../styles/common.module.css";

const BlueyTierList = () => {
    return (
        <Layout>
            <h1 className={pageHeader}>{blueyData.title}</h1>
            <p>{blueyData.description}</p>
            <p>
                Subjective Criteria
                <ul>
                    <li>
                        S Tier: Perfect episode—stop everything to watch.
                        Resonates deeply, has memorable moments or lessons, and
                        appeals equally to kids and adults.
                    </li>
                    <li>
                        A Tier: Great episode—always happy to watch. Strong
                        message or entertainment value but not quite "perfect."
                    </li>
                    <li>
                        B Tier: Good episode—enjoyable but not always a
                        standout. Solid storytelling and humor.
                    </li>
                    <li>
                        C Tier: Okay episode—fine to leave on but doesn’t
                        captivate you. Might be forgettable or have a weaker
                        theme.
                    </li>
                    <li>
                        D Tier: Weak episode—rarely enjoyable. Lacks the charm
                        or quality of better episodes.
                    </li>
                    <li>
                        F Tier: Unwatchable—actively disliked. Poor message,
                        annoying elements, or inappropriate tone.
                    </li>
                </ul>
            </p>

            <h2>Episodes</h2>
            <TierTable columns={blueyData.columns} data={blueyData.episodes} />
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="Bluey Tier List" />
        <Fonts />
    </>
);

export default BlueyTierList;
