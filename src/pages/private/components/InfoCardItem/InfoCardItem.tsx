import React from "react";
import styles from "./InfoCardItem.module.css";

interface InfoCardItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const InfoCardItem: React.FC<InfoCardItemProps> = ({ icon, label, value }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <label>{label}</label>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default InfoCardItem;
