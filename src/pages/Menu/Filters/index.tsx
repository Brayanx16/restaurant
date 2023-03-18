import styles from "./Filters.module.scss";
import filters from "./filters.json";
import classNames from "classnames";

type TFilter = typeof filters[0];

interface IProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: IProps) {
  const selectedFilter = (option: TFilter) => {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  };

  return (
    <div className={styles.filtros}>
      {filters.map((item) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filter === item.id,
          })}
          key={item.id}
          onClick={() => selectedFilter(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
