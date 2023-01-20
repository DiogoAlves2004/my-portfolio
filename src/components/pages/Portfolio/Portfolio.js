
//img and icons
import Project1 from '../../../img/projects_images/project1.png'

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
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    ' 
                    gitLink=''
                />

                <ProjectCard 
                    image={Project1} 
                    title='Projeto Portifolio' 
                    text='
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    ' 
                    gitLink=''
                />


                <ProjectCard 
                    image={Project1} 
                    title='Projeto Portifolio' 
                    text='
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    ' 
                    gitLink=''
                />

                <ProjectCard 
                    image={Project1} 
                    title='Projeto Portifolio' 
                    text='
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    ' 
                    gitLink=''
                />

                <ProjectCard 
                    image={Project1} 
                    title='Projeto Portifolio' 
                    text='
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    ' 
                    gitLink=''
                />


                <ProjectCard 
                    image={Project1} 
                    title='Projeto Portifolio' 
                    text='
                        Apesar de ser um ótimo programador foquei somente em estudar, e agora estou atras de meu primeiro emprego.
                        A baixo, você ira encontrar alguns projeto pessoais sem fins lucrativos, que eu fiz especialmente para você conhecer minhas habilidades, esepro que você goste!
                    ' 
                    gitLink=''
                />



            </div>

        </section>
    )
}export default  Portfolio