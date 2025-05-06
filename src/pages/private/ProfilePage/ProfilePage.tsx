import Header from "../../../components/Header/Header";
import { useAppSelector } from "../../../redux/hooks";
import InfoCardItem from "../components/InfoCardItem/InfoCardItem";
import styles from "./ProfilePage.module.css";
import { FaUser, FaIdBadge, FaWallet } from "react-icons/fa";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <div className={styles.noUser}>No hay usuario autenticado</div>;
  }

  const raffleFund = (user.depositTotal * 0.1).toFixed(2);

  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.header}>
          {/* <FaUser className={styles.profileIcon} /> */}
          <h1 className={styles.title}>Mi Perfil</h1>
          <p className={styles.subtitle}>
          </p>
        </div>

        <div className={styles.profileCard}>
          <InfoCardItem icon= {<FaIdBadge />} label="ID" value={user.id} />
          <InfoCardItem icon= {<FaUser />} label="Nombre" value={user.name} />
          <InfoCardItem icon= {<FaWallet />} label="Fondo acumulado" value={`$${raffleFund}`} />
        </div>
      </div>
      <Header />
    </>
  );
};

export default ProfilePage;
