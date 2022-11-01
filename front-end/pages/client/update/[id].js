import styles from '../../../styles/addClient.module.css'
import UpdateFields from '../../../component/updateClient/update'

const Updateclient = () =>
{
    return (
        <div className={styles.client}>
            <h2> Ajouter un nouveau client</h2>
            <UpdateFields/>
        </div>
    )
}

export default Updateclient;