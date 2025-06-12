import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import styles from "./ReferralSection.module.css";
import { PublicRoutes } from "../../../../../routes/routes";

const ReferralSection = () => {
  return (
    <section className={styles.referralSection}>
      <div className={styles.referralContent}>
        <FaUserFriends className={styles.referralIcon} />
        <div className={styles.textBlock}>
          <h2>¡Conectá & Ganá con Kuty!</h2>
          <p>
            Invitá a tus amigos a sumarse a <strong>Kuty</strong> y obtené comisiones cada vez que ellos recarguen saldo. <br />
            Cuantos más invites, <span className={styles.highlight}>¡más ganás!</span>
          </p>
          <Link
            to={`/${PublicRoutes.PUBLIC}/${PublicRoutes.BENEFITS}`}
            className={styles.referralButton}
          >
            Ver cómo funciona
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
