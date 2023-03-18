import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Order.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export type TOptionsOrder = "" | "porcao" | "qtd_pessoas" | "preco";

interface IProps {
  order: TOptionsOrder;
  setOrder: Dispatch<SetStateAction<TOptionsOrder>>;
}

export default function Order({ order, setOrder }: IProps) {
  const [open, setOpen] = useState(false);
  const orderName =
    order && options.find((option) => option.value === order)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: order !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{orderName || "Ordenar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.ordenador__option}
            key={option.value}
            onClick={() => setOrder(option.value as TOptionsOrder)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
