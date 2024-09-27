import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const TagsPage = ({ data }) => {
    const tags = data.allMdx.group;

    return (
        <Layout>
            <div>
                <h1>Tags</h1>
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

export default TagsPage;
