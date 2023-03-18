import TagsDish from "components/TagsDish";
import styles from "./item.module.scss";
import { TDish } from "types/dish";
import { useNavigate } from "react-router-dom";

export default function Item(props: TDish) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p> {description} </p>
        </div>
      </div>
      <TagsDish {...props} />
    </div>
  );
}
