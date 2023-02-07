
//img and icons
import {TbBrandReactNative } from 'react-icons/tb'

//component

//hooks
import Navbar from '../../layout/navbar/Navbar'


import styles from './styles/Mobile.module.css'
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

                                <TbBrandReactNative />

                            </div>

                            <div className={styles.text_content}>
                                <h3>React Native</h3>
                                <p>
                                        Uma das principais ferramentas para criação de aplicações mobile nativas, o react native e um grande aliado meu na hora de criar apps que se comportam extremamente bem tanto no Android como no IOS
                                </p>
                            </div>
                        </li>

                    </ul>

                </div>

                <div className={styles.right_content}>


                    <h3>Minhas Hard-Skils</h3>


                    <ul className={styles.progress_container}>
                        <li className={styles.progress_item}>
                            <label>React Native</label>
                            <ProgressBar progress='progress50' />
                        </li>
                    </ul>



                </div>
            </div>

        </section>
    )
}export default  Home