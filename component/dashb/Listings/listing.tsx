import styles from "./styles.module.css";
import Card from "../../card";

const Listing = () => {
  return (
    <div className={styles.listing}>
      <h2>Manage Listings</h2>
      <div className={styles.listingCards}>
        <Card width={100} height={100} text={""}>
          <div className={styles.RegionPic}>
            <img
              src="https://images.unsplash.com/photo-1665478613994-a3636ae775b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
          </div>
          <p>
          The place is close to Barceloneta Beach and bus stop just 2 min.
          </p>
        </Card>

        <Card width={100} height={100} text={""}>
            <div className={styles.RegionPic}>
              <img
                src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3731&q=80"
                alt=""
              />
          </div>
          <p>
            The place is close to Barceloneta Beach and bus stop just 2 min.
          </p>
        </Card>

        <Card width={100} height={100} text={""}>
          <div className={styles.RegionPic}>
            <img
              src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
              alt=""
            />
          </div>
          <p>
            The place is close to Barceloneta Beach and bus stop just 2 min.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Listing;
