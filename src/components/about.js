import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { container, image, text } from "./about.module.css"; // Import the CSS for styling

const About = () => {
    return (
        <div className={container}>
            <StaticImage
                className={image}
                width="150px"
                alt="author"
                src="../images/portrait.png"
            />
            <div className={text}>
                <p>
                    Born and raised in The Church of Jesus Christ of Latter-day
                    Saints, I’m a Sunday School teacher who’s passionate about
                    the Book of Mormon and its teachings. I’m also a Master
                    Mason, fascinated by the connections between Freemasonry and
                    the early history of my faith. When I’m not writing about
                    faith, politics, or Freemasonry, I’m building software tools
                    for smart contracts and exploring the world of Web3. This
                    blog is my way of sharing thoughts in progress, inviting
                    readers to join me on a journey of discovery and reflection.
                </p>
            </div>
        </div>
    );
};

export default About;
