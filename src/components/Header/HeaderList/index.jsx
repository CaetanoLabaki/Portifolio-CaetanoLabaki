import styles from "./style.module.css"

export const HeaderList = () => {
    return(
        <ul className={styles.headerList}>
            <li className="headerItem">Sobre</li>
            <li className="headerItem">Stack</li>
            <li className="headerItem">Projetos</li>
        </ul>
    )
}