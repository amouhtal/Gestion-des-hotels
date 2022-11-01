import AddClientFields from "../../../component/addClient/addClient";
import styles from '../../../styles/addclient.module.css'

const Addnewclient = () =>
{
    return (
        <div className={styles.client}>
            <h2> Ajouter un nouveau client</h2>
            <AddClientFields/>
        </div>
    )
}

export default Addnewclient;