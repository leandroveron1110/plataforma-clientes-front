import React from 'react';
import styles from './TournamentInfo.module.css';
import {
    FaTrophy,
    FaCalendarAlt,
    FaGift,
    FaInfoCircle,
    FaMoneyBillWave,
    FaCrown,
  } from 'react-icons/fa';

const TournamentInfo: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Torneo de Mayo - Ganemos & Zeus</h1>
        <p className={styles.subHeader}>¡Vigente todo el mes de mayo!</p>
      </header>

      <div className={`${styles.card} ${styles.mainPrizeCard}`}>
        <h2>Premios Principales</h2>
        <div className={styles.prizes}>
          <div className={styles.prizeGold}>🥇 $500.000 en efectivo</div>
          <div className={styles.prizeSilver}>🥈 80.000 fichas bonus</div>
          <div className={styles.prizeBronze}>🥉 30.000 fichas bonus</div>
        </div>
        <p className={styles.requirement}>
          Para ganar el 1° puesto:<br />
          <strong>✔ Participar activamente todos los días</strong><br />
          <strong>✔ Participar en los 4 mini torneos</strong>
        </p>
      </div>

      <div className={`${styles.card} ${styles.pointsCard}`}>
        <h2>¿Cómo acumular puntos?</h2>
        <ul>
          <li>🎯 Cada $2.500 apostados = 1 punto</li>
          <li>💰 Cada depósito mayor a $10.000 = +2 puntos extra</li>
        </ul>
        <p className={styles.note}>¡Mientras más apostás, más chances tenés!</p>
      </div>

      <div className={`${styles.card} ${styles.miniTourneyCard}`}>
        <h2>Mini Torneos Semanales</h2>
        <p className={styles.note}>Obligatorios para acceder al premio mayor</p>
        <ul className={styles.miniList}>
          <li>4 mini torneos a lo largo del mes</li>
          <li>Los puntos se suman al torneo general</li>
        </ul>
        <div className={styles.miniPrizes}>
          <h4>Premios por Mini Torneo</h4>
          <ul>
            <li>🥇 10.000 fichas bonus</li>
            <li>🥈 5.000 fichas bonus</li>
            <li>🥉 2.500 fichas bonus</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.card} ${styles.rulesCard}`}>
        <h2>Reglas Generales</h2>
        <ul>
          <li>Máximo 3 días de inactividad permitidos</li>
          <li>Superar ese límite puede descalificarte o quitarte puntos</li>
          <li>Las fichas bonus deben triplicarse en juego para ser retiradas</li>
        </ul>
        <p className={styles.note}>
          Ej: Si ganás 30.000 fichas bonus, deberás generar 90.000 en apuestas para retirar.
        </p>
      </div>

      <footer className={styles.footer}>
        <p>Los premios pueden depositarse en cuentas Ganemos o Zeus, según prefiera el ganador.</p>
      </footer>
    </section>
  );
};

export default TournamentInfo;
