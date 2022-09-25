
import styles from "./card.module.css";

// type BoxProps = {
//   children: React.ReactNode; // 👈️ type children
// };

const Card = (props: any) => {
    return (
        <div className={styles.card}>
                {props.children}
        </div>
    )
}

export default Card;