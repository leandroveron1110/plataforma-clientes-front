import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTrophy, FaUser } from "react-icons/fa";
import styles from "./Header.module.css";
import { PrivateRoutes } from "../../routes/routes";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`}
          className={`${styles.navItem} ${isActive(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`) ? styles.active : ""}`}
        >
          <FaHome />
          <span>Home</span>
        </Link>
        <Link
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TOURNAMENT}`}
          className={`${styles.navItem} ${isActive(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TOURNAMENT}`) ? styles.active : ""}`}
        >
          <FaTrophy />
          <span>Torneo</span>
        </Link>
        <Link
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`}
          className={`${styles.navItem} ${isActive(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`) ? styles.active : ""}`}
        >
          <FaUser />
          <span>Perfil</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
