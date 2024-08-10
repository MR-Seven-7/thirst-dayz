import React from "react";
import styles from "./css/eventPage.module.css";
import { Link } from "react-router-dom";

const EventPage = () => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.eventPic}></div>
        <div className={styles.eventDetails}>
          <p>DRESSCODE: </p>
          <p>DATE: </p>
          <p>ENTRY TIME: </p>
          <p>ENTRY FEE: </p>
        </div>
      </div>
      <div className={styles.noteDiv}>
        <p>
          ***Note: This event is strictly for student and requires verification
          to attend***
        </p>
      </div>
      <hr />
      <div className={styles.instructionContainer}>
        <div className={styles.instructionHeader}>
          <h3>INSTRUCTIONS:</h3>
        </div>
        <div className={styles.instructions}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            facere iste omnis, voluptatum dolorum ducimus. Molestiae illo
            laborum quasi ipsam, sunt totam natus ab ducimus, porro aliquam sed
            ex necessitatibus. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Explicabo perspiciatis numquam, saepe repellendus
            quidem suscipit tenetur a. Vitae, tempore. Est quidem provident
            sapiente deserunt animi officia praesentium hic quas perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            iste provident doloribus accusamus repellat corrupti beatae nulla
            perferendis, odio tempore ullam a doloremque consequuntur esse harum
            voluptatum delectus. Sed, accusantium?
          </p>
        </div>
        <div className={styles.registerBtnDiv}>
          <Link to="/registration">
            <button className={styles.registerBtn}>REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
