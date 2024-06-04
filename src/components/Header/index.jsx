import { HeaderList } from "./HeaderList";
import styles from "./style.module.css"


export const Header = () => {
    return(
        <header className="section-padding">
            <div className="container">
                <div className={styles.headerElements}>
                    <h4 className="title sm">Portfólio</h4>
                    <HeaderList />
                    <button className="btn">Contato</button>
                </div>
            </div>          
        </header>
    )
}