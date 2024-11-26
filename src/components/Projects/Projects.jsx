import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectItem}>
          <h3 className={styles.projectTitle}>Investment Recommendation System Using Collaborative Filter</h3>
          <p className={styles.projectDescription}>
            This project connects investors and entrepreneurs by recommending entrepreneurial ideas based on user preferences.
            Entrepreneurs can view ideas tailored to their interests on their dashboard. Built using Next.js, the system leverages
            collaborative filtering to provide personalized recommendations.
          </p>
          <ul className={styles.projectFeatures}>
            <li>Recommends entrepreneurial ideas based on user preferences.</li>
            <li>Uses collaborative filtering to personalize recommendations.</li>
            <li>Built with Next.js for a seamless and efficient user experience.</li>
            <li>Provides a user-friendly dashboard for entrepreneurs to view ideas.</li>
          </ul>
          <p className={styles.techStack}>Tech Stack: Next.js, Collaborative Filtering Algorithms</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
