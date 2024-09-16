import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useEffect, useState } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";

const IndexPage = () => {
    const [videoMetadata, setVideoMetadata] = useState(null);
    const videoId = "7D8t67X7FC0";

    useEffect(() => {
        async function fetchYouTubeMetadata(videoId) {
            const response = await fetch(
                `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
            );
            if (response.ok) {
                const data = await response.json();
                setVideoMetadata(data);
            } else {
                console.error("Failed to fetch YouTube metadata");
            }
        }

        fetchYouTubeMetadata(videoId);
    }, [videoId]);

    console.log(videoMetadata);

    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?si=8aMDHCsWIRXKnZSR`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            {videoMetadata && (
                <div>
                    <h3>{videoMetadata.title}</h3>
                    <p>By: {videoMetadata.author_name}</p>
                </div>
            )}
            <StaticImage alt="big foot" src="../images/bigfoot.png" />
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="Home Page"></Seo>
        <Fonts></Fonts>
    </>
);

export default IndexPage;
