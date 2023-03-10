
//img and icons
import {FaPhp, FaDatabase ,FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'


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
                                    Já possuo conhecimento da linguagem PHP, estou comecando a etudar para  no futuro me tornar FullStack, gosto de sua estrutura bem definida e simples. Atualmente, estudo a arquitetura MVC para poder avançar no backend
                                </p>
                            </div>
                        </li>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaDatabase />

                            </div>

                            <div className={styles.text_content}>
                                <h3>SQL | MySql</h3>
                                <p>
                                    Aprendi o básico de MySql, sei fazer o CRUD com a linguagem SQL
                                </p>
                            </div>
                        </li>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaNodeJs />

                            </div>

                            <div className={styles.text_content}>
                                <h3>Node.js</h3>
                                <p>
                                    Criação de APIs e back-end em node.js
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
                            <ProgressBar progress='progress60' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>MySql</label>
                            <ProgressBar progress='progress70' />
                        </li>

                        
                        <li className={styles.progress_item}>
                            <label>Node.js</label>
                            <ProgressBar progress='progress75' />
                        </li>


                    </ul>

                    

                </div>
            </div>

        </section>
    )
}export default  Home