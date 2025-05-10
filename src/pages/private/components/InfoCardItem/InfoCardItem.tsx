import React from "react";
import styles from "./InfoCardItem.module.css";

interface InfoCardItemProps {
  icon: React.ReactNode;
  label: string;
  value?: string | number;
  onClick?: () => void;
}

const InfoCardItem: React.FC<InfoCardItemProps> = ({
  icon,
  label,
  value,
  onClick,
}) => {
  return (
    <div
      className={styles.item}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className={styles.icon}>{icon}</div>
      <div>
        <label>{label}</label>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default InfoCardItem;
