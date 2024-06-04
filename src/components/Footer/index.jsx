import whatsAppLogo from "../../assets/whatsapp-icon.png";
import linkedinLogo from "../../assets/linkedin-icon.png";
import gitHubLogo from "../../assets/gitHub-icon.png";
import { user } from "../../data/user";
import styles from "./style.module.css"

export const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.footerLeft}>
                        <h2 className="title md">Contatato</h2>
                        <div className={styles.footerImg}>
                            <img src={whatsAppLogo} alt="Ícone whatsapp" />
                            <img src={linkedinLogo} alt="Ícone Linkedin" />
                            <img src={gitHubLogo} alt="Ícone GitHub" />
                        </div>
                    </div>                   
                    <p className="paragraph">Todos os direitos reservados - {user}</p>
                </div>
            </div>
        </footer>
    )

}

