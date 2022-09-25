
import styles from '../../styles/dashoboard.module.css'


const Dashboardd = () =>{

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashCards}>
                <div className={styles.dashCard}>
                    <div className={styles.cardHead}><h5>Cette année</h5></div>
                    <div className={styles.cardBody}>6,240 د.م</div>
                    <div className={styles.cardFooter}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div>
                    </div>
                </div>
                <div className={styles.dashCard}>
                    <div className={styles.cardHead}><h5>Ce mois</h5></div>
                    <div className={styles.cardBody}>6,240 د.م</div>
                    <div className={styles.cardFooter}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div>
                    </div>
                </div>
                <div className={styles.dashCard}>
                    <div className={styles.cardHead}><h5>Aujourd'hui</h5></div>
                    <div className={styles.cardBody}>6,240 د.م</div>
                    <div className={styles.cardFooter}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div>
                    </div>
                </div>
                <div className={styles.dashCard}>
                    <div className={styles.cardHead}><h5>Facture (s) payée (s)</h5></div>
                    <div className={styles.cardBody}>6,240 د.م</div>
                    <div className={styles.cardFooter}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div>
                    </div>
                </div>
                <div className={styles.dashCard}>
                <div className={styles.cardHead}><h5>Factures non payées</h5></div>
                    <div className={styles.cardBody}>6,240 د.م</div>
                    <div className={styles.cardFooter}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div>
                    </div>    
                </div>
                <div className={styles.dashCard}>
                    <div className={styles.cardHead}><h5>Factures en retard</h5></div>
                    <div className={styles.cardBody}>6,240 د.م</div>
                    <div className={styles.cardFooter}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div>
                    </div> 
                </div>
            </div>
            <div className={styles.factureGaph}>
                <div className={styles.factureChart}>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboardd;