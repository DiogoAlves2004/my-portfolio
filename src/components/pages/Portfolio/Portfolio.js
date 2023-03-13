
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
                    title='Projeto Portifólio'
                    text='
                        Um dos meus primeiros grandes projetos foi esse portfólio, provavelmente em algum tempo ele deve ser atualizado com as novas tecnologias que estou aprendendo, mas acredito que seu design e sua interface sejam agradavei e responsivos a todos os tipos de dispositivo, eu tive uma grande dedicação em fazer isso possível
                    '
                    gitLink='https://diogoalves.netlify.app/'
                />

                <ProjectCard
                    image={Project2}
                    title='D-movies'
                    text='
                            O D-movies, serviu para mostrar minhas habilidades em consumo de APIs e criação de layouts, o porjeto ainda esta em desenvolvimento mas essa é a primeira versão estavel. Nele você consegue consultar a nota e a descrição de qualquer filme, serie ou pessoa listada no TMDB
                    '
                    gitLink='https://d-movies.netlify.app/'
                />

                <ProjectCard
                    image={'https://media.tenor.com/0bN9L54PMmsAAAAC/coming-soon-see-it-soon.gif'}
                    title='E-comerce'
                    text='
                            Ainda em desenvolvimento
                    '
                    gitLink='https://d-movies.netlify.app/'
                />


            </div>

        </section>
    )
}export default  Portfolio