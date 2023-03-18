import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: IProps) {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
