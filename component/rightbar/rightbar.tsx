import React, { useRef } from "react";
import styles from "../../styles/Rightbar.module.css";
import DropDlist from "../droplist/droplist";
import { useState, useContext  } from "react";
import { ThemeContext } from "../../contexts/BarContext";

const Rightbar = () => {
  // let navRef = useRef(null);

  const {dark,  toggleDark } = useContext(ThemeContext);

  return (
    <div

       className={
        dark
          ? `${styles.rightbar} ${styles.displaynone}`
          : styles.rightbar
      
    }
    >
      <div className={styles.logo}>
        <h2 style={{ color: "#fff", textAlign: "center" }}>Delta Factures</h2>
      </div>
      <div className={styles.profile}>
        <img
          src="https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg"
          alt="profile img"
        />
        <div>
          <p>User Name</p>
        </div>
      </div>

      <div className={styles.menu}>
        
        <ul className={styles.listItems}>
          <DropDlist />
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
