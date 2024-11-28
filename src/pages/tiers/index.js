import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";
import { pageHeader } from "../../styles/common.module.css";

const TiersPage = () => {
    const tierLists = [
        {
            title: "Bluey Episodes",
            description: "A comprehensive tier ranking of all Bluey episodes",
            slug: "bluey",
        },
        // Add more tier lists here as they're created
    ];

    return (
        <Layout>
            <h1 className={pageHeader}>Tier Lists</h1>
            <div>
                {tierLists.map((list, index) => (
                    <div key={index}>
                        <h2>
                            <Link to={`/tiers/${list.slug}`}>{list.title}</Link>
                        </h2>
                        <p>{list.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="Tier Lists" />
        <Fonts />
    </>
);

export default TiersPage;
