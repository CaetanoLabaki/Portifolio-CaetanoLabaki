import bannerIlustration from "../../assets/banner-img.png"
import { username } from "../../data/user"
import styles from "./style.module.css"

export const BannerSection = () => {
    return(
        <section className="section-padding">
            <div className="container">
                <div className={styles.bannerElements}>
                    <div className={styles.bannerLeft}>
                        <p className="userName">{username}</p>
                        <h1 className="title lg">Bem vindo ao meu portfólio</h1>
                        <p className="paragraph">Uma frase sobre mim</p>
                        <button className="btn">Saiba mais</button>
                    </div>
                    <img src={bannerIlustration} alt="Imagem de Computador" />
                </div>
            </div>
        </section>
    )
}