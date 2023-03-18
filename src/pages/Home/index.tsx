import stylesTemas from "styles/Tema.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import styles from "./Home.module.scss";
import menu from "data/itens.json";
import { useNavigate } from "react-router-dom";
import { TDish } from "types/dish";

export default function Start() {
  let recommendedDishes = [...menu];
  const navigate = useNavigate();

  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const redirectParamsDetails = (dish: TDish) => {
    navigate(`/dish/${dish.id}`, { state: dish });
  };

  return (
    <section>
      <h3 className={stylesTemas.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {recommendedDishes.map((item) => (
          <div className={styles.recomendado} key={item.id}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirectParamsDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTemas.titulo}> Nossa casa </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Minha casa" />
        <div className={styles.nossaCasa__endereco}>
          Rua da praia, 499 <br /> <br /> Jardim Natal - PI
        </div>
      </div>
    </section>
  );
}
