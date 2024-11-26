import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceList}>
        <div className={styles.experienceItem}>
          <h3 className={styles.position}>Vice President</h3>
          <p className={styles.company}>Himalaya Robotics Club</p>
          <p className={styles.dates}>May 2024 - Present</p>
          <ul className={styles.responsibilities}>
            <li>Leading initiatives to promote robotics and technology within the community.</li>
            <li>Organizing workshops and events to engage members and develop their skills.</li>
            <li>Collaborating with other tech clubs to foster a cohesive learning environment.</li>
            <li>Mentoring members and overseeing project development.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h3 className={styles.position}>Member</h3>
          <p className={styles.company}>Himalaya Robotics Club</p>
          <p className={styles.dates}>Feb 2023 - May 2024</p>
          <ul className={styles.responsibilities}>
            <li>Participated in various robotics competitions and events.</li>
            <li>Contributed to the development of club projects and initiatives.</li>
            <li>Assisted in organizing and facilitating workshops and seminars.</li>
            <li>Engaged in peer learning and collaborative projects.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h3 className={styles.position}>Campus Representative</h3>
          <p className={styles.company}>Hult Prize at IOE, Pulchowk Campus</p>
          <p className={styles.dates}>Nov 2023 - Feb 2024</p>
          <ul className={styles.responsibilities}>
            <li>Spearheaded efforts to empower students to become change-makers.</li>
            <li>Organized and promoted the Hult Prize competition on campus.</li>
            <li>Facilitated workshops and training sessions for participants.</li>
            <li>Collaborated with faculty and student organizations to drive engagement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Experience;