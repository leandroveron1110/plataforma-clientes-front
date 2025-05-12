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
import BonusModal from "./components/BonusModal/BonusModal";

const Home = () => {
  const [data, setData] = useState<UserTournamentSummary | null>(null);
  const user = useAppSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBonus, setIsBonus] = useState<boolean>(false);
  const [isLastPlayed, setIsLastPlayed] = useState<boolean>(false);
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

    const lastPlayed = localStorage.getItem("bonusGameLastPlayed");
    const today = new Date().toDateString();

    if (lastPlayed === today) {
      setIsLastPlayed(true);
    }

    fetchData();
  }, [user]);

  const handleClick = (tournament: Tournament) => {
    navigate(
      `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TOURNAMENT}/${tournament.tournamentId}`
    );
  };

  if (!data) return <Loader />;

  const accumulatedFund = (data.totalDeposits * 0.1).toFixed(2);

  const modalBonus = () => {if(!isLastPlayed) setIsBonus(!isBonus);}

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
                value={isLastPlayed ? "Ya jugaste hoy. Volvé mañana para intentarlo de nuevo." : "Reclama tu bonus del día"}
                onClick={modalBonus}
              />
            </section>
          </div>
          {isBonus ? (
            <BonusModal
              prizes={[
                // Tier: MIN (comunes) – 9 cartas
                { label: "5% Bonus", tier: "min", weight: 3 },
                { label: "+3 Puntos", tier: "min", weight: 3 },

                // Tier: MAJO (intermedios) – 3 cartas
                { label: "15% Bonus", tier: "majo", weight: 3 },
                { label: "$1k Fichas", tier: "majo", weight: 1 },
                { label: "+5 Puntos", tier: "majo", weight: 3 },

                // Tier: MAXI – 2 cartas
                { label: "45% Bonus", tier: "maxi", weight: 2 },
                { label: "$3k Fichas", tier: "maxi", weight: 2 },

                // Tier: GOLD – 1 carta (muy raro, pero posible)
                { label: "🎖️ BONUS LEGENDARIO", tier: "gold", weight: 1 },
              ]}
              onClose={modalBonus}
            />
          ) : (
            <></>
          )}

          <Header />
        </>
      )}
    </>
  );
};

export default Home;
