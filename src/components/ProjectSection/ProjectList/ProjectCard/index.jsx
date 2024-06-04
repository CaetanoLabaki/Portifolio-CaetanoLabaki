import gitIcon from "../../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = ({ project }) => {
    return(
        <li className={styles.projectCard}>
            <div className={styles.projectInfo}>
                <h4 className="title sm">{project.name}</h4>
                <p className="paragraph">{project.description}</p>
                <a className="projectLinks" href="#">Saiba mais</a>
            </div>
            <img src={gitIcon} alt="Ícone Git" />
        </li>
    )
}
