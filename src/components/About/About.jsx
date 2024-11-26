import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
            <img
          src={getImageUrl("about/I.JPG")}
          alt="About image of me"
          className={styles.aboutImg}
        />
         
                <div className={styles.text}>
                    <p>
                        Hi, I'm Sampada Tandan, a passionate learner and explorer. I enjoy my solitude and find joy in discovering new things and places. My journey has been one of constant learning and growth, and I thrive on the excitement of new challenges.
                    </p>
                    <p>
                        With a background in Computer Engineering, I have honed my skills in Html, Css, JavaScript, Python. I'm adapted to React and Flutter framework. I am committed to continuously improving and adapting in this ever-changing world.
                    </p>
                    <p>
                        When I'm not working, you can find me writing on a diary and spending time with my loved ones and being touch with nature, always seeking new experiences and adventures. I believe in the power of curiosity and the importance of a lifelong learning mindset.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
