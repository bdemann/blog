import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h1 className={pageHeader}>About Me</h1>
            <p>
                I was born and raised in The Church of Jesus Christ of
                Latter-day Saints, and my faith has been the cornerstone of my
                life from day one. After serving a mission, I’ve continued to
                live and share my beliefs, currently as a Sunday School teacher
                in my local ward. Everything I do—how I see the world, what I
                value, and the way I engage with the world around me—is deeply
                shaped by my faith. The Book of Mormon, in particular, holds a
                special place in my heart, not just for its spiritual insights
                but for its history, translation, and even the geographical
                discussions it sparks.
            </p>
            <p>
                My interest in Freemasonry began during my mission when I
                stumbled upon its connections to the early history of the
                Church. That curiosity led me to join a lodge this year, and in
                July 2024, I was raised to the sublime degree of Master Mason.
                The ceremonial and esoteric aspects of Freemasonry have become a
                passion of mine, providing a unique space for reflection and
                understanding that complements my faith in unexpected ways.
            </p>
            <p>
                Politically, I’m primarily focused on issues that promote and
                protect families. The Church’s teachings on the family have
                profoundly influenced my views. I believe that a society’s moral
                foundation and its commitment to families are key to its
                prosperity—something the Book of Mormon teaches plainly. So long
                as we are moving toward a society that honors these values,
                other political debates are, in my mind, secondary.
            </p>
            <p>
                In my professional life, I’ve been developing software tools for
                smart contracts for over two years. While I don’t claim to be a
                cryptocurrency expert, I’m deeply interested in the principles
                behind Web3 and decentralization. I believe in the idea of
                putting the internet back into the hands of the people, giving
                us more control over how we interact online.
            </p>
            <p>
                This blog is the product of years of scribbling down thoughts
                and ideas, refining them, and thinking through them further.
                Eventually, I decided that it was time to polish those thoughts
                and share them. I don’t write to provide final answers but to
                offer a snapshot of where I am on my journey. My hope is that
                readers will come along for the ride, engaging with the ideas
                and feeling empowered to explore and discover for themselves.
            </p>
            <p>
                If there’s one thing I want you to take away, it’s that faith is
                worth holding onto. For those going through a faith crisis, I
                hope you’ll find here not just reassurance, but a reminder that
                the journey of faith is one of learning and discovery. There’s
                always more to see, more to know, and more to believe.
            </p>
            <p>
                You might also find it helpful to understand this{" "}
                <Link to="/disclaimer">disclaimer</Link> and{" "}
                <Link to="/use-of-ai">
                    my use of AI while making this blog and my art
                </Link>
                .
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
