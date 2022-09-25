import React, { useRef } from "react";
import styles from "../../styles/Rightbar.module.css";
import DropDlist from "../droplist/droplist";

const Rightbar = () => {
  // let navRef = useRef(null);

  return (
    <div
      className={styles.rightbar}
    //   style={{
    //     position: "relative",
    //     width: open ? "16rem" : "6rem",
    //     // width: "30rem",
    //     transition: "all 0.3s ease",
    //   }}
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
      {/* <h5 style={{ color: '#fff', textAlign: 'center' }} >MENU D'ADMINISTRATION</h5> */}
      <div className={styles.menu}>
        <ul className={styles.listItems}>
          <DropDlist />
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
