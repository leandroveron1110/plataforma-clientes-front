import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TournamentDetail.module.css";
import TournamentServices, { TournamentResponse } from "./services/TournamentDetail.service";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import Header from "../../../../components/Header/Header";


const TournamentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [tournament, setTournament] = useState<TournamentResponse | null>(null);
  const [countdown, setCountdown] = useState<string>("");
  const [showFullRanking, setShowFullRanking] = useState(false);

  useEffect(() => {
    if (id) fetchTournament();
  }, [id]);

  useEffect(() => {
    if (tournament?.endDate) {
      const interval = setInterval(() => {
        updateCountdown(tournament.endDate);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [tournament]);

  const fetchTournament = async () => {
    try {
      const service = TournamentServices.crud();
      service.setUrl(`/${id}/participants/prizes`);
      const res = await service.findOne<TournamentResponse>(null);
      if (res) setTournament(res);
    } catch (err) {
      console.error("Error fetching tournament:", err);
    }
  };

  const updateCountdown = (endDate: string) => {
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    const distance = end - now;

    if (distance < 0) {
      setCountdown("0 días 00:00:00");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

    setCountdown(`${days} días ${hours}:${minutes}:${seconds}`);
  };

  const toggleFullRanking = () => setShowFullRanking(!showFullRanking);

  if (!tournament) {
    return <div className={styles.tournamentContainer}>Cargando torneo...</div>;
  }

  return (
    <>
    <div className={styles.tournamentContainer}>
      <h1 className={styles.title}>{tournament.name}</h1>
      <p className={styles.description}>
        Suma puntos cada vez que realices una carga y participa por increíbles premios!
      </p>

      <div className={styles.countdownContainer}>
        <p>Número de días restantes hasta el próximo reinicio de calificación mensual</p>
        <strong className={styles.countdown}>{countdown}</strong>
      </div>

      {/* <section className={styles.prizesSection}>
        <h2 className={styles.sectionTitle}>Premios</h2>
        <div className={styles.prizeList}>
          {tournament.prizes.map((prize, index) => (
            <div key={prize.position} className={styles.prizeCard}>
              <img src={prize.prize.imageUrl} alt={`Premio ${index + 1}`} className={styles.prizeImage} />
              <span className={styles.prizePosition}># {prize.position}</span>
              <p className={styles.prizeName}>{prize.prize.name}</p>
              <p className={styles.prizeValue}>${prize.prize.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className={styles.participantsSection}>
        <h2 className={styles.sectionTitle}>Ranking</h2>
        <div className={`${styles.participantsTableContainer} ${showFullRanking ? styles.full : ""}`}>
          <table className={styles.participantsTable}>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Usuario</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {tournament.participants
                .sort((a, b) => b.points - a.points)
                .slice(0, showFullRanking ? tournament.participants.length : 10)
                .map((participant, index) => {
                  let icon = "";
                  if (index === 0) icon = "🥇";
                  else if (index === 1) icon = "🥈";
                  else if (index === 2) icon = "🥉";
                  else if (index < 10) icon = "🏅";
                  const isCurrentUser = user?.id === participant.id;

                  return (
                    <tr key={participant.id} className={isCurrentUser ? styles.highlighted : ""}>
                      <td>{icon} {index + 1}</td>
                      <td>{isCurrentUser ? user.name : participant.name}</td>
                      <td>{participant.points}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {tournament.participants.length > 10 && (
            <button onClick={toggleFullRanking} className={styles.toggleButton}>
              {showFullRanking ? "Ver Top" : "Ver más"}
            </button>
          )}
        </div>
      </section>
    </div>
    <Header />
    </>
  );
};

export default TournamentDetail;
