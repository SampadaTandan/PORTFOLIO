import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.description}>
        Let's connect! You can find me on these platforms:
      </p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/SampadaTandan"
          target="_blank"
          className={styles.socialLink}
        >
          <img
            src="assets/contact/githubIcon.png"
            alt="GitHub"
            className={styles.icon}
          />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/sampada_tandan"
          target="_blank"
          className={styles.socialLink}
        >
          <img
            src="/assets/contact/insta.png"
            alt="Instagram"
            className={styles.icon}
          />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/sampada-tandan-452abb283/"
          target="_blank"
          className={styles.socialLink}
        >
          <img
            src="assets\contact\linkedinIcon.png"
            alt="LinkedIn"
            className={styles.icon}
          />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
