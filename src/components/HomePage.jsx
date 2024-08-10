import React from "react";
import EventCarousel from "./EventCarousel";
import styles from "./css/homePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <div>Featured Events</div>
      </div>
      <div className={styles.carousel}>
        <Link to="event">
          <EventCarousel />
        </Link>
      </div>
      <div className={styles.aboutUs}>
        <h2>WE ARE</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          temporibus, perspiciatis aperiam deleniti distinctio error accusamus
          dolore! Assumenda voluptatem natus asperiores vel commodi minus
          ratione obcaecati ea deleniti? Ipsum, amet?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
