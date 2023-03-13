

//styles
import styles from './styles/ProjectCard.module.css'

import { FaExternalLinkAlt } from 'react-icons/fa'

import styled from 'styled-components'

function ProjectCard({image, title, text, gitLink}){


    const Icon = styled.div`
        position: relative;
        left: 45%;
        
        margin: 10px;

        & > svg{
            font-size: 1.5em;
        }
    `

    return(
        <a className={styles.project_card} href={gitLink} target="_blank">

            <Icon>
                <FaExternalLinkAlt/>
            </Icon>

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