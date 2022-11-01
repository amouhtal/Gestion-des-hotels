import { useEffect, useState } from "react";
import styles from "../../styles/dashb.module.css";
import DashCharts from "./DashCharts/DashCharts";
import DashRapport from "./dashrapport/dashrapport";
import Glob from "./globSales/glob";
import Listing from "./Listings/listing";

const Dashb = () => {
    // const [DashCharts_, changeDash] = useState<any>()

    // useEffect(()=>{
    //     changeDash(<DashCharts/>)
    // },[])
  return (
    <div className={styles.dashb}>
      <DashRapport />
      <Glob />
      <DashCharts/>
      <Listing/>
    </div>
  );
};

export default Dashb;
