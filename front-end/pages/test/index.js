import { useEffect, useState } from "react";
import styles from "../../styles/dashb.module.css";
import DashCharts from '../../component/dashb/DashCharts/DashCharts'

const Test = () => {

 
  return (
    <div className={styles.dashb}>
      <DashCharts/>
    </div>
  );
};

export default Test;
