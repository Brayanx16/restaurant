import styles from "./itens.module.scss";
import menu from "data/itens.json";
import Item from "./Item";
import { useEffect, useState } from "react";
import { TMenu } from "types/dish";

interface IProps {
  search: string;
  filter: number | null;
  order: string;
}

export default function Itens(props: IProps) {
  const [list, setList] = useState(menu);
  const { search, filter, order } = props;

  const testSearch = (title: string) => {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  };

  const testFilters = (id: number) => {
    if (filter !== null) return filter === id;
    return true;
  };

  const sortAscending = (list: TMenu, param: "size" | "serving" | "price") => {
    return list.sort((a, b) => (a[param] > b[param] ? 1 : -1));
  };

  const sort = (newList: TMenu) => {
    switch (order) {
      case "qtd_pessoas":
        return sortAscending(newList, "serving");

      case "preco":
        return sortAscending(newList, "price");

      case "porcao":
        return sortAscending(newList, "size");

      default:
        return newList;
    }
  };

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilters(item.category.id)
    );
    setList(sort(newList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, order]);

  return (
    <div>
      {list.map((item) => (
        <div className={styles.itens}>
          <Item key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
}
