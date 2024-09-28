import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h1 className={pageHeader}>How I Use AI in My Creative Process</h1>
            <p>
                AI has become a valuable tool in helping me bring my creative
                ideas to life, especially when it comes to visual design and web
                development. For artwork, I often use Midjourney to generate
                background images, which I then refine further in Photoshop and
                enhance with graphic design elements in Illustrator. For
                example, in my series of travel posters, while the background
                might start with an AI-generated image, all the additional
                design work is done by me. I don’t consider myself an artist,
                but AI has given me a way to express myself and realize ideas
                that I might not have been able to achieve otherwise.
            </p>
            <p>
                When it comes to writing about myself—like this section or the
                author bio in my posts—AI, specifically ChatGPT, helps me craft
                the text. I then go through it, making sure it accurately
                reflects my voice. I’m a little self-conscious about writing
                personal details, so this process helps me feel more comfortable
                sharing.
            </p>
            <p>
                For programming and development tasks on the blog, I also rely
                on ChatGPT. It’s great for taking care of repetitive boilerplate
                tasks, which lets me focus more on solving higher-level design
                and functionality problems.
            </p>
            <p>
                However, I want to emphasize that all my blog posts are 100%
                written by me. I value being genuine and real in what I share.
                Sometimes I use ChatGPT as a starting point for research, but I
                always verify its information, and my posts are based on primary
                sources that I review myself. On occasion, I might ask ChatGPT
                to help with minor edits to make sure things flow well or to
                catch grammatical issues—but only to avoid asking my wife to
                proofread everything! As you’ll see, my posts still aren’t
                always error-free, and that’s something I’m continually working
                on.
            </p>
            <p>
                Unless otherwise specified, any images you see included in my
                blog posts are generated using Midjourney.
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
