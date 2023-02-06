
//img and icons
import {FaReact, FaCss3Alt, FaLaptopCode } from 'react-icons/fa'

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
                                    Domino das principais ferramentas e tecnologias atuais para criação e desenvolvimento de aplocações web: JavaScript, CSS, Sass, Html, Bootstrap, React...
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
                                    Como principal framework/lib do mercado, o react.js não pode ficar de fora do meu portifolio de habilidades, tenho dominio medio e estou a cada dia me aprofundado mais na criação de interfaces reutilizaveis
                                </p>
                            </div>
                        </li>

                        <li className={styles.left_content_item}>

                        <div className={styles.icon_container}>

                            <FaCss3Alt />

                        </div>

                        <div className={styles.text_content}>
                            <h3>CSS, Sass</h3>
                            <p>
                                A responsividade de um site diz muito de como ele foi feito, um dos meus maiores aliados sempre foi o Css/Sass, com a estilização dos componentes posso deixar a UI simples, funcional e fluida
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
                            <ProgressBar progress='progress90' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>CSS</label>
                            <ProgressBar progress='progress80' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>JavaScript</label>
                            <ProgressBar progress='progress80' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>React</label>
                            <ProgressBar progress='progress60' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>Figma</label>
                            <ProgressBar progress='progress50' />
                        </li>

                        <li className={styles.progress_item}>
                            <label>Consumo de Api</label>
                            <ProgressBar progress='progress60' />
                        </li>

                    </ul>



                </div>
            </div>

        </section>
    )
}export default  Home