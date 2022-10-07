import "../styles/globals.css";
import type { AppProps } from "next/app";
import Rightbar from "../component/rightbar/rightbar";
import styles from "../styles/conatiner.module.css";
import PrimarySearchAp from "../component/navbar/navbar";
import React, { useState } from "react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { toggleNav, leftBarBackColot } from "../contexts/atoms";
import { useAtom } from "jotai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

let bgColor = '';
function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useAtom(toggleNav);
  
  const [Rt_Bg_Clr, setRt_Bg_Clr] = useAtom(leftBarBackColot);

  const settingRef = useRef<HTMLHeadingElement>(null);
  const [clicked, setClicked] = useState<Boolean>(false);
  function ShowSettingd() {
    let elmnt;
    if (null !== settingRef.current) {
      elmnt = settingRef.current.style;
      setClicked(!clicked);
      clicked ? (elmnt.display = "flex") : (elmnt.display = "none");
    }
  }
  const changeBgColor = (color: string) => {
	bgColor = color + ', url("https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")'
	
	setRt_Bg_Clr(bgColor);
  };

  return (
    <div className={styles.conatiner}>
      <div onClick={ShowSettingd} className={styles.settings}>
        <FontAwesomeIcon icon={faGear} className={styles.icon} />
        <ul
          ref={settingRef}
          className={styles.dropdownMenu}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <li>SIDEBAR BACKGROUND</li>
          <li>
            <span
              onClick={() => {
                changeBgColor("linear-gradient(0deg, rgba(9, 118, 141, 0.9) 0%, rgba(70, 83, 172, 0.9) 50%, rgba(25, 68, 168, 0.9) 100%)");
              }}
            ></span>
            <span
              onClick={() => {
                changeBgColor("linear-gradient(180deg, rgba(255, 154, 139, 0.9) 0%, rgba(255, 106, 136, 0.9) 55%, rgba(255, 153, 172, 0.9) 100%)"
                );
              }}
            ></span>
            <span
              onClick={() => {
                changeBgColor(
                  "linear-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.7))"
                );
              }}
            ></span>
          </li>
          <li></li>
        </ul>
      </div>
      {/* <ThemeContextProvider> */}
      <Rightbar />
      <div
        className={
          !toggle
            ? styles.rightSide
            : `${styles.rightSide} ${styles.rightSidetr}`
        }
      >
        <PrimarySearchAp />
        <Component {...pageProps} />
      </div>
      {/* </ThemeContextProvider> */}
    </div>
  );
}

export default MyApp;
