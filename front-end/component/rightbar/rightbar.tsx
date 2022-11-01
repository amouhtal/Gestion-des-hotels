import React, { useRef } from "react";
import styles from "../../styles/Rightbar.module.css";
import DropDlist from "../droplist/droplist";
import { useAtom } from "jotai";
import { toggleNav } from "../../contexts/atoms";
import { leftBarBackColot } from "../../contexts/atoms";

const Rightbar = () => {
  const [toggle, setToggle] = useAtom(toggleNav);
  const [Rt_Bg_Clr, setRt_Bg_Clr] = useAtom(leftBarBackColot);

  return (
    <div
      className={
        toggle ? `${styles.rightbar} ${styles.displaynone}` : styles.rightbar
      }
      //   style={{background-image: "blue"}}
      style={{ backgroundImage: Rt_Bg_Clr}}
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
