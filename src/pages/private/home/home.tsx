import { useEffect, useState } from "react";
import styles from "./home.module.css";
import { FaGift, FaWallet } from "react-icons/fa";
import homeService, {
  Tournament,
  UserTournamentSummary,
} from "./services/home.service";
import Header from "../../../components/Header/Header";
import { PrivateRoutes, PrivateRoutesHttp } from "../../../routes/routes";
import { useAppSelector } from "../../../redux/hooks";
import InfoCardItem from "../components/InfoCardItem/InfoCardItem";
import Loader from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState<UserTournamentSummary | null>(null);
  const user = useAppSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const service = homeService.crud();
        service.setBaseUrl(`${PrivateRoutesHttp.USERS}/tournaments/${user.id}`);
        const res = await service.findOne<UserTournamentSummary, string>("");
        setData(res);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleClick = (tournament: Tournament) => {
    navigate(
      `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TOURNAMENT}/${tournament.tournamentId}`
    );
  };

  if (!data) return <Loader />;

  const accumulatedFund = (data.totalDeposits * 0.1).toFixed(2);

  const message = encodeURIComponent(
    "¡Hola! Quiero recibir mi bono del día. ¿Está disponible?"
  );
  const phone = "5493442622763";
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.container}>
            <section className={styles.userInfo}>
              <h2 className={styles.welcome}>¡Bienvenido, {data.userName}!</h2>
              <InfoCardItem
                icon={<FaWallet />}
                label="Fondo acumulado"
                value={`$${Number(accumulatedFund).toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                })}`}
              />
            </section>

            <section className={styles.tournaments}>
              <h3 className={styles.sectionTitle}>Tus torneos</h3>

              {data.tournaments.length === 0 ? (
                <p className={styles.noTournaments}>
                  No estás participando en ningún torneo por ahora.
                </p>
              ) : (
                data.tournaments.map((t) => (
                  <div
                    onClick={() => handleClick(t)}
                    key={t.tournamentId}
                    className={styles.tournamentCard}
                  >
                    <div className={styles.tournamentTop}>
                      <h4 className={styles.tournamentName}>
                        {t.tournamentName}
                      </h4>
                      <span className={styles.dateRange}>
                        {new Date(t.startDate).toLocaleDateString()} -{" "}
                        {new Date(t.endDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={styles.stats}>
                      <div className={styles.statBlock}>
                        <p className={styles.label}>Puntos</p>
                        <p className={styles.value}>{t.userPoints}</p>
                      </div>
                      <div className={styles.statBlock}>
                        <p className={styles.label}>Ranking</p>
                        <p className={styles.value}>
                          #{t.userRanking}
                          {/* <span className={styles.participants}>/ {t.totalParticipants}</span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>

            <section className={styles.bonus}>
              <InfoCardItem
                icon={<FaGift />}
                label="Bonus del día"
                value={"Reclama tu bonus del día"}
                onClick={() => window.open(whatsappUrl, "_blank")}
              />
            </section>
          </div>

          <Header />
        </>
      )}
    </>
  );
};

export default Home;
