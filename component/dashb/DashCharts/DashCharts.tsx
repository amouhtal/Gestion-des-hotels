import Card from "../../card";
import MyChart1 from "./Chart";
import MyChart2 from "./Chart2";

import styles from "./DashCharts.module.css";

const DashCharts = () => {
  return (
    <div className={styles.DashCharts}>
      <Card width={500} height={300} text={"updated 4 minutes ago"}>
        <MyChart2 text={'Daily Sales'} />
      </Card>
      <Card width={500} height={300} text={"updated 4 minutes ago"}>
        <MyChart2 text={'Email Subscriptions'} />
      </Card>
    
    </div>
  );
};

export default DashCharts;
