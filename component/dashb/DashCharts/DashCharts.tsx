import Card from "../../card";
import MyChart2 from "./Chart2";
import MyChart3 from "./Chart3";

import styles from "./DashCharts.module.css";

const DashCharts = () => {
  return (
    <div className={styles.DashCharts}>
      <Card width={100} height={100} text={"updated 4 minutes ago"}>
        <MyChart2 text={"Daily Sales"} />
      </Card>
      <Card width={100} height={100} text={"updated 4 minutes ago"}>
           <MyChart3 />
      </Card>
      <Card width={100} height={100} text={"updated 4 minutes ago"}>
        <MyChart2 text={"Email Subscriptions"} />
      </Card>
    </div>
  );
};

export default DashCharts;
