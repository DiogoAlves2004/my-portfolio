import { Link } from "react-router-dom"
import styles from './styles/Button.module.css'
function Button({text, to, type}){

    return(

        <Link className={`${styles.btn} ${styles[type]}`} to={to}>
        {text}
        </Link>
    )
}export default Button