import React, { useState } from "react";
import styles from "../../styles/dropdownlist.module.css";
import { droplist } from "../rightbar/dropdownlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SvgIcon from "@mui/icons-material/Dashboard";


// ${<SvgIcon component={DashboardIcon}
//                 inheritViewBox
//                 className={`${styles.icons} ${styles.dashIcon}`}
//                 />} ${<span>{elmnt.title}</span>}
				
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
              {
              index == 0 ? 
			  	<>
				<SvgIcon component={DashboardIcon}
					inheritViewBox
					className={'${styles.icons} ${styles.dashIcon}'}
					/> <span>{elmnt.title}</span> 
				</>:
				<> 
				<FontAwesomeIcon  icon={elmnt.icon} className={styles.icons} />
					<span>{elmnt.title}</span>
					<FontAwesomeIcon
						icon={elmnt.downicon}
						className={styles.icons2}
					/>
				</>
			  }
              
              
              
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
                  <a
                    href={"http://localhost:3000/client/" + subel.title}
                    key={index1}
                  >
                    <li className={styles.options}>{subel.title}</li>
                  </a>
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
