import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import styles from "./css/navbarCSS.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.icons}>
          <AiOutlineMenu />
        </div>
        <div>
          <p className={styles.logoTag}>ThirstDays</p>
        </div>
        <div className={styles.icon}>
          <BsBell />
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default Navbar;
