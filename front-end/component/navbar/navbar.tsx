import styles from "../../styles/navbar.module.css";
import {
  faList,
  faEllipsisVertical,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { toggleNav } from "../../contexts/atoms";
import { useAtom } from "jotai";

const Navbar = () => {
  const [toggle, setToggle] = useAtom(toggleNav);

  const handClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <button onClick={handClick}>
            {!toggle ? (
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className={styles.icon}
              />
            ) : (
              <FontAwesomeIcon icon={faList} className={styles.icon} />
            )}
          </button>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.right}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInp}
          />
          <button className={styles.searchIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          </button>
          <button className={styles.iconDashboard}>
            <SvgIcon component={DashboardIcon} inheritViewBox />
          </button>
          <button className={styles.notfIcon}>
            <SvgIcon component={NotificationsIcon} inheritViewBox />
          </button>
          <button className={styles.profileIcon}>
            <SvgIcon component={PersonIcon} inheritViewBox />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
