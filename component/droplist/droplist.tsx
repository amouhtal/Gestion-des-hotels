import React, { useState } from "react";

import styles from "../../styles/dropdownlist.module.css";
import { droplist } from "../rightbar/dropdownlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const DropDlist = () => {
  const [active, setActive] = useState(-1);
  return (
    <>
      {droplist?.map((elmnt, index) => {
        return (
          <li className={`${styles.menuul}`} key={index}>
            <a
              className={styles.menuuLa}
              onClick={() => {
                setActive((prev) => {
                  if (prev === index) return -1;
                  return index;
                });
              }}
            >
              <FontAwesomeIcon icon={elmnt.icon} className={styles.icons} />
              <span>
                {elmnt.title}
              </span>
              <FontAwesomeIcon
                icon={elmnt.downicon}
                className={styles.icons2}
              />
            </a>
            <ul
              className={`${
                active === index
                  ? styles.menuulliulli && styles.active
                  : styles.menuulliulli
              }`}
            >
              {elmnt.sublist.map((subel, index1) => {
                return (
                  <li className={styles.options} key={index1}>
                    <a href={"http://localhost:3000/client/" + subel.title}>
                      {subel.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default DropDlist;
