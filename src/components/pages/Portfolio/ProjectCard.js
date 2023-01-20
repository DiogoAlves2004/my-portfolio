

//styles
import styles from './styles/ProjectCard.module.css'


function ProjectCard({image, title, text, gitLink}){
    return(
        <a className={styles.project_card} href={gitLink} target="_blank">
            <div>
                <div className={styles.image_container}>
                    <img src={image} className={styles.image} />
                </div>

                <h1 className={styles.title}>{title}</h1>

                <p className={styles.text}>{text}</p>

            </div>
        </a>
    )
} export default ProjectCard