import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./BonusModal.module.css";
import BonusCard from "./components/BonusCard/BonusCard";
import BonusWinner from "./components/BonusWinner/BonusWinner";

interface BonusPrize {
  label: string;
  tier: "min" | "majo" | "maxi" | "mega" | "gold";
  weight: number; // cantidad de veces que puede aparecer
}

interface BonusGameModalProps {
  onClose: () => void;
  prizes: BonusPrize[];
}

interface Card {
  id: number;
  label: string;
  tier: BonusPrize["tier"];
  revealed: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const BonusGameModal = ({ onClose, prizes }: BonusGameModalProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    const generated: Card[] = [];

    prizes.forEach((prize, _index) => {
      for (let i = 0; i < prize.weight; i++) {
        generated.push({
          id: generated.length,
          label: prize.label,
          tier: prize.tier,
          revealed: false,
        });
      }
    });

    const shuffled = shuffleArray(generated);
    setCards(shuffled);
  }, [prizes]);

  const handleCardClick = (index: number) => {
    if (cards[index].revealed || winner) return;

    const updatedCards = [...cards];
    updatedCards[index].revealed = true;
    setCards(updatedCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    // Agrupar por label
    const labelCount: Record<string, number> = {};
    newFlipped.forEach((i) => {
      const label = updatedCards[i].label;
      labelCount[label] = (labelCount[label] || 0) + 1;
      if (labelCount[label] === 3) {
        // window.scrollTo({ top: 0, behavior: "smooth" });
        setWinner(label);
      }
    });
  };

  const handleClaim = (prize: string) => {
    const phone = "5493442622763";
    const message = encodeURIComponent(
      `¡Hola! Quiero reclamar mi premio del juego de bonos. Me salió: ${prize}`
    );
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    setWinner(null);
    localStorage.setItem("bonusGameLastPlayed", new Date().toDateString());
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {
          !winner && (<button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>)
        }
        
        <h2 className={styles.modalTitle}>¡Descubrí tu bono!</h2>

        <section className={styles.containerGrid}>
          <div className={styles.grid}>
            {cards.map((card, index) => (
              <BonusCard
                key={card.id}
                revealed={card.revealed}
                label={card.label}
                tier={card.tier}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </section>

        {winner && (
          <BonusWinner prize={winner} onClaim={() => handleClaim(winner)} />
        )}
      </div>
    </div>
  );
};

export default BonusGameModal;
