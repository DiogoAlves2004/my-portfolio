
//img and icons
import {FaReact, FaCss3Alt, FaLaptopCode, FaRegGrinTongueSquint } from 'react-icons/fa'

//component

//hooks
import Navbar from '../../layout/navbar/Navbar'


import styles from './styles/Frontend.module.css'
import ProgressBar from '../../layout/input/ProgressBar'

function Home(){
    

    return(
    
        <section className={styles.frontend_container}>

            <header className={styles.header}>
                <Navbar />
                <h1 className={styles.title} ><span>Front-end skills</span></h1>
            </header>


            <div className={styles.content_container}>


                <div className={styles.left_content}>
                    
                    <h3><span>_</span>Oque eu sei fazer?</h3>

                    <ul>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaLaptopCode />

                            </div>

                            <div className={styles.text_content}>
                                <h3>Web Developer</h3>
                                <p>
                                    Dominío das principais ferramentas e tecnologias atuais para criação e desenvolvimento de aplicações web: JavaScript, TypeScript, CSS, Sass, Html, Bootstrap, React, Next.js...
                                </p>
                            </div>
                        </li>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaReact />

                            </div>

                            <div className={styles.text_content}>
                                <h3>React.js</h3>
                                <p>
                                    Como principal framework/lib do mercado, o React.js não pode ficar de fora do meu portifolio de habilidades, tenho grande Dominío e estou a cada dia me aprofundado mais na criação de interfaces responsivas e intuitivas
                                </p>
                            </div>
                        </li>

                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaCss3Alt />

                            </div>

                            <div className={styles.text_content}>
                                <h3>CSS, SASS, CSS-IN-JS</h3>
                                <p>
                                    Tenho grande Dominío sobre todas as principais ferramentas de estilização da web, o CSS, SASS e o CSS-IN-JS
                                </p>
                            </div>

                        </li>


                        <li className={styles.left_content_item}>

                            <div className={styles.icon_container}>

                                <FaRegGrinTongueSquint />

                            </div>

                            <div className={styles.text_content}>
                                <h3>Soft Skills</h3>
                                <p>
                                    Comunicação, Colaboração, Organização, Inteligência emocional, Capacidade de resolver problemas <br/>
                                    Clean code, Mobile First, Metodologias Ágeis

                                </p>
                            </div>

                        </li>

                        </ul>

                </div>

                <div className={styles.right_content}>


                    <h3>Minhas Hard-Skils</h3>


                    <ul className={styles.progress_container}>
                        

                        <li className={styles.progress_item}>
                            <label>HTML</label>
                            <ProgressBar progress='progress95' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>CSS</label>
                            <ProgressBar progress='progress90' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>JavaScript</label>
                            <ProgressBar progress='progress95' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>React</label>
                            <ProgressBar progress='progress95' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>Figma</label>
                            <ProgressBar progress='progress75' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>Consumo de Api</label>
                            <ProgressBar progress='progress95' />
                        </li>

                    </ul>



                </div>
            </div>

        </section>
    )
}export default  Home