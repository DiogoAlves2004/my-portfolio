
//styles
import styles from './styles/ProgressBar.module.css'

function ProgressBar(props){

    return(
        <div className={styles.container}>
            <div className={` ${styles.progress_bar} ${styles[props.progress]}`}></div>
        </div>
    )
} export default ProgressBar 