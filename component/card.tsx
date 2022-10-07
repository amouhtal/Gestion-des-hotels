import styles from "./card.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SvgIcon from "@mui/icons-material/Twitter";

const Card = (props: any) => {
  return (
    <div
      className={styles.card}
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      {props.children}
      <SvgIcon
        component={AccessTimeIcon}
        inheritViewBox
        className={styles.icon}
      />
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
