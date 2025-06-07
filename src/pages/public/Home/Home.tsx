import Header from "../../../components/Header/Header";
import { PublicRoutes } from "../../../routes/routes";
import BonusLocos from "./components/BonusLocos/BonusLocos";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Bienvenido a Kuty</h1>
        <p>¡Disfrutá los Bonus Locos exclusivos del fin de semana!</p>
      </header>

      <BonusLocos />

      <section className={styles.referralSection}>
        <h2>Conectá & Ganá con Kuty</h2>
        <p>
          Invitá a tus amigos a sumarse a Kuty y ganá una comisión cada vez que
          ellos recarguen saldo. ¡Entre más compartís, más ganás!
        </p>
        <Link
          to={`/${PublicRoutes.PUBLIC}/${PublicRoutes.BENEFITS}`}
          className={styles.referralButton}
        >
          Ver cómo funciona
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>
          ¿Necesitás ayuda?{" "}
          <a
            href="https://wa.me/5493442672449"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </footer>
    </main>
    <Header />
    </>
  );
};

export default Home;
