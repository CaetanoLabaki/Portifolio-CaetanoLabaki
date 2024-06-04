import { TechList } from "./TechList"
import styles from "./style.module.css"



export const TechSection = () => {
    return(
        <section className="section-padding">
            <div className="container">
                <div className={styles.tecSection}>
                    <h2 className="title md">Tecnologias</h2>
                    <TechList />
                </div>                
            </div>
        </section>

    )
}