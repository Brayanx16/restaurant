import styles from "./About.module.scss";
import stylesTema from "styles/Tema.module.scss";
import home from "assets/about/casa.png";
import massa1 from "assets/about/massa1.png";
import massa2 from "assets/about/massa2.png";

const imagens = [massa1, massa2];

export default function About() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> About </h3>
      <div className={styles.sobreNos}>
        <img src={home} alt="My House" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.iamgens}>
        {imagens.map((imagem, index) => (
          <div className={styles.imagens__imagem} key={index}>
            <img src={imagem} alt="Imagens de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}
