import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const TagsPage = ({ data }) => {
    const tags = data.allMdx.group;

    return (
        <Layout>
            <div>
                <h1 className={pageHeader}>All Tags</h1>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${tag.fieldValue}`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx {
            group(field: { frontmatter: { tags: SELECT } }) {
                fieldValue
                totalCount
            }
        }
    }
`;

export const Head = () => (
    <>
        <Seo title="All Tags"></Seo>
        <Fonts></Fonts>
    </>
);

export default TagsPage;
