
//img and icons
import Project1 from '../../../img/projects_images/project1.png'
import Project2 from '../../../img/projects_images/project2.png'

//component

//hooks
import Navbar from '../../layout/navbar/Navbar'
import ProjectCard from './ProjectCard'

//styles
import styles from './styles/Portifolio.module.css'

function Portfolio(){



    return(

        <section className={styles.portifolio_container}>

            <header className={styles.header}>
                <Navbar />

                <div className={styles.title} >

                    <h1>Portfólio</h1>

                    <p>
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    </p>

                </div>
            </header>

            <div className={styles.content_container}>



                <ProjectCard
                    image={Project1}
                    title='Projeto Portifolio'
                    text='
                        Um dos meus primeiros grandes projetos foi esse portfolio, provavelmente em algum tempo ele deve ser atualizado com as novas tecnologias que estou aprendendo, mas acredito que seu design e sua interface sejam agradavei e responsivos a todos os tipos de dispositivo, eu tive uma grande dedicação em fazer isso possivel
                    '
                    gitLink='https://github.com/DiogoAlves2004/project-react-portfolio'
                />

                <ProjectCard
                    image={Project2}
                    title='Movies Base'
                    text='
                        Meu proximo grande projeto para este portifolio ainda em produção. Imagine um lugar aonde voce podera consultar todo e qualquer filme que deseja, saber seus atores, suas notas, e aonde foi filmado. Essa sera a Movies Base
                    '
                    gitLink='https://github.com/DiogoAlves2004/project-react-portfolio'
                />


            </div>

        </section>
    )
}export default  Portfolio