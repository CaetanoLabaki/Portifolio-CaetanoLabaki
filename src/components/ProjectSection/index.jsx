import { ProjectList } from "./ProjectList"
import styles from "./style.module.css"



export const ProjectSection = () => {
    return(
        <section>
            <div className="container">
                <div className={styles.projectSection}>
                    <h2 className="title md">Projetos</h2>
                    <ProjectList />
                </div>                
            </div>            
        </section>
        )
}