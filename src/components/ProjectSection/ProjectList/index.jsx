import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./style.module.css";

export const ProjectList = () => {
    return(
        <ul className={styles.projectList}>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </ul>
        
    )
}