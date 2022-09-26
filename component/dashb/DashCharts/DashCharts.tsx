import Card from "../../card";
import MyChart from "./Chart";
import styles from "./DashCharts.module.css";

const DashCharts = () => {
  return (
    <div className={styles.DashCharts}>
      <Card>
        <MyChart />
      </Card>
      <Card />
      <Card />
    </div>
  );
};

export default DashCharts;
