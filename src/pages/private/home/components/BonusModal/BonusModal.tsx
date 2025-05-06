import { FaTimes } from "react-icons/fa";
import styles from "./BonusModal.module.css";

interface BonusModalProps {
  onClose: () => void;
  bonus: { amount: number; description: string; expiration: string } | null;
}

const BonusModal = ({ onClose, bonus }: BonusModalProps) => {
  if (!bonus) return null; // Si no hay bono, no se muestra nada

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>Bono Especial del Día</h2>
        <p><strong>Descripción:</strong> {bonus.description}</p>
        <p><strong>Válido hasta:</strong> {new Date(bonus.expiration).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BonusModal;
