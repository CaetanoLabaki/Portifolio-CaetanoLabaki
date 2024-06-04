import { technologies } from "../../../data/technologies"
import { TechCard } from "./TechCard"
import styles from "./style.module.css"

export const TechList = () => {
    return(
        <ul className={styles.teclist}>
            {technologies.map(technologie => (
                <TechCard key={technologie.name} technologie={technologie} />
            ))}
        </ul>

    )
}