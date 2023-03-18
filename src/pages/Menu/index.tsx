import stylesTemas from "styles/Tema.module.scss";
import Order, { TOptionsOrder } from "./Order";
import styles from "./Menu.module.scss";
import { useState } from "react";
import Filters from "./Filters";
import Search from "./Search";
import Itens from "./Itens";

export default function Menu() {
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState<TOptionsOrder>("");
  const [search, setSearch] = useState("");

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTemas.titulo}>Menu</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </div>
      <Itens search={search} filter={filter} order={order} />
    </section>
  );
}
