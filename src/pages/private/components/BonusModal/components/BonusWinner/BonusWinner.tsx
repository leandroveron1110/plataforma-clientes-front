// BonusWinner.tsx
import styles from './BonusWinner.module.css';
import { FaWhatsapp } from 'react-icons/fa';

interface BonusWinnerProps {
  prize: string;
  onClaim: () => void; // Esta función se ejecuta al hacer clic
}

const BonusWinner = ({ prize, onClaim }: BonusWinnerProps) => {
  return (
   <div className={styles.container}>
  <div className={styles.glow}></div>
  <div className={styles.content}>
    <strong>¡Enhorabuena!</strong><br />
    Te llevaste: <span className={styles.prize}>{prize}</span>
  </div>
  <div className={styles.contentButton}>
    <button className={styles.button} onClick={onClaim}>
      <FaWhatsapp className={styles.icon} />
      ¡Reclamar por WhatsApp!
    </button>
  </div>
</div>
  );
};

export default BonusWinner;