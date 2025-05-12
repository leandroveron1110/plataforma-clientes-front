// BonusCard.tsx
import styles from "./BonusCard.module.css";

interface BonusCardProps {
  revealed: boolean;
  label: string;
  tier: "min" | "majo" | "maxi" | "mega" | "gold";
  onClick: () => void;
}

const BonusCard = ({ revealed, label, tier, onClick }: BonusCardProps) => {
  const tierClass = styles[`tier-${tier}`] || "";

  return (
    <div className={styles.flipCardWrapper} onClick={onClick}>
  <div className={`${styles.flipCardInner} ${revealed ? styles.revealed : ""}`}>
    <div className={`${styles.flipCardFace} ${styles.flipCardFront}`}>
      ?
    </div>
    <div className={`${styles.flipCardFace} ${styles.flipCardBack} ${tierClass}`}>
      {revealed ? label : ''}
    </div>
  </div>
</div>

  );
};

export default BonusCard;
