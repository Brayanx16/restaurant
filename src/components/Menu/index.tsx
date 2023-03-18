import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./NavMenu.module.scss";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const routes = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Menu",
      to: "/menu",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li className={styles.menu__link} key={index}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
