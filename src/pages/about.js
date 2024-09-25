import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
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
            <h2>Disclaimer</h2>
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

export const Head = () => (
    <>
        <Seo title="About"></Seo>
        <Fonts></Fonts>
    </>
);

export default AboutPage;
