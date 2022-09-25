
import styles from '../../styles/dashb.module.css'
import DashRapport from './dashrapport/dashrapport';
import Glob from './globSales/glob';

const Dashb = () =>
{
    return (
        <div className={styles.dashb}>
            <DashRapport/>
            <Glob/>
        </div>
    )
}

export default Dashb;