import ClientsList from '../../../component/listclients/listclients'
import styles from '../../../styles/addclient.module.css'

const Listclient = () =>
{
    return (
        <div className={styles.client}>
            <h2> List de Clients</h2>
            <ClientsList/>
        </div>
    )
}

export default Listclient;