import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Sampada Tandan.</h1>
          <p className={styles.description}>
            I'm a learner. I enjoy my solitude and my hobbies include exploring new things and places.
          </p>
          <a
            href="mailto:sampadatandan127@gmail.com"
            className={styles.contactBtn}
          >
            Contact me
          </a>
        </div>
        <img
          src={getImageUrl("hero/linkedin.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
