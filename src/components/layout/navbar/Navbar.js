
import styles from './styles/Navbar.module.css'

//libs 
import { Link } from 'react-router-dom'

//hambueguer


//hooks


function Navbar(){



return(

<header className={styles.header}>

    <div className={styles.box_name}>
        <span>Diogo Alves</span>
    </div>


    <nav className={styles.nav} >





            <div className={styles.navbar} >
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Sobre min</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/frontend'>Front-end</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/backend'>Back-end</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/mobile'>Mobile</Link>
                    </li>
                    
                    <li className={styles.item}>
                        <Link to='/portfolio'>Portifólio</Link>
                    </li>
                    
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>

                </ul>
            </div>
            



    </nav>
</header>
)

}export default Navbar