import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { FaWallet } from "react-icons/fa";
import homeService, { UserTournamentSummary } from "./services/home.service";
import Header from "../../../components/Header/Header";
import { PrivateRoutesHttp } from "../../../routes/routes";
import { useAppSelector } from "../../../redux/hooks";
import InfoCardItem from "../components/InfoCardItem/InfoCardItem";

const Home = () => {
  const [data, setData] = useState<UserTournamentSummary | null>(null);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const service = homeService.crud();
        service.setBaseUrl(`${PrivateRoutesHttp.USERS}/tournaments/${user.id}`);
        const res = await service.findOne<UserTournamentSummary, string>("");
        setData(res);
      }
    };

    fetchData();
  }, [user]);

  if (!data) return <div className={styles.loading}>Cargando...</div>;

  const accumulatedFund = (data.totalDeposits * 0.1).toFixed(2);

  return (
    <>
      <div className={styles.container}>
        <section className={styles.userInfo}>
          <h2 className={styles.welcome}>¡Bienvenido, {data.userName}!</h2>
          <InfoCardItem icon= {<FaWallet />} label="Fondo acumulado" value={`$${Number(accumulatedFund).toLocaleString("es-AR", { minimumFractionDigits: 2 })}`} />
        </section>

        <section className={styles.tournaments}>
          <h3 className={styles.sectionTitle}>Tus torneos</h3>

          {data.tournaments.length === 0 ? (
            <p className={styles.noTournaments}>No estás participando en ningún torneo por ahora.</p>
          ) : (
            data.tournaments.map((t) => (
              <div key={t.tournamentId} className={styles.tournamentCard}>
                <header className={styles.cardHeader}>
                  <h4 className={styles.tournamentName}>{t.tournamentName}</h4>
                  <span className={styles.dateRange}>
                    {new Date(t.startDate).toLocaleDateString()} -{" "}
                    {new Date(t.endDate).toLocaleDateString()}
                  </span>
                </header>
                <div className={styles.details}>
                  <div>
                    <p className={styles.label}>Puntos</p>
                    <p className={styles.value}>{t.userPoints}</p>
                  </div>
                  <div>
                    <p className={styles.label}>Ranking</p>
                    <p className={styles.value}>
                      #{t.userRanking}{" "}
                      <span className={styles.participants}>de {t.totalParticipants}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>

      <Header />
    </>
  );
};

export default Home;
