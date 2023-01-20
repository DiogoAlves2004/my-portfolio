
//img and icons
import {FaPhp, FaDatabase} from 'react-icons/fa'

//component

//hooks
import { useState } from 'react'
import Navbar from '../../layout/navbar/Navbar'


import styles from './styles/Backend.module.css'
import ProgressBar from '../../layout/input/ProgressBar'

function Home(){

    const [activePage, setActivePage] = useState()

    

    return(
    
        <section className={styles.backend_container}>

            <header className={styles.header}>
                <Navbar />
                <h1 className={styles.title} ><span>Back-end skills</span></h1>
            </header>

            <div className={styles.content_container}>


                <div className={styles.left_content}>
                    
                    <h3><span>_</span>Oque eu sei fazer?</h3>

                    <ul>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaPhp />

                            </div>

                            <div className={styles.text_content}>
                                <h3>PHP</h3>
                                <p>
                                    Tenho habilidades medias no PHP, estou comecando a etudar para  no futuro me tornar FullStack, gosto de sua Sintaxe bem definida e simples. Atualmente, estudo a arquitetura MVC para poder avançar no backend
                                </p>
                            </div>
                        </li>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaDatabase />

                            </div>

                            <div className={styles.text_content}>
                                <h3>PHP</h3>
                                <p>
                                    Tenho habilidades medias no PHP, estou comecando a etudar para  no futuro me tornar FullStack, gosto desua Sintaxe bem definida e simples. Atualmente, estudo a arquitetura MVC para poder avançar no backend
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>

                <div className={styles.right_content}>


                    <h3>Coding Skills</h3>


                    <ul className={styles.progress_container}>
                        

                        <li className={styles.progress_item}>
                            <label>PHP</label>
                            <ProgressBar progress='progress50' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>MySql</label>
                            <ProgressBar progress='progress45' />
                        </li>

                    </ul>



                </div>
            </div>

        </section>
    )
}export default  Home