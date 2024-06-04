import styles from "./style.module.css"

export const TechCard = ({ technologie }) => {
    return(
        <li className={styles.teclistItem}>
            <img src={technologie.img} alt={technologie.name} />
            <h3 className="title sm">{technologie.name}</h3>
        </li>
    )
}