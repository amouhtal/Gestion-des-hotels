
import styles from '../../styles/dashb.module.css'
import DashCharts from './DashCharts/DashCharts';
import DashRapport from './dashrapport/dashrapport';
import Glob from './globSales/glob';

const Dashb = () =>
{
    return (
        <div className={styles.dashb}>
            <DashRapport/>
            <Glob/>
            <DashCharts />
        </div>
    )
}

export default Dashb;