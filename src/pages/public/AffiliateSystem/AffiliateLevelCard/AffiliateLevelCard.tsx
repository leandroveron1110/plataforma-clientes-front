import React from "react";
import styles from "./AffiliateLevelCard.module.css";
import { AffiliateLevel, Rules } from "../types/AffiliateLevel";
import CountUp from "react-countup";
import { LuCalendarCheck2, LuCalendarDays, LuCoins } from "react-icons/lu";

type Props = {
  level: AffiliateLevel;
};

const AffiliateLevelCard: React.FC<Props> = ({ level }) => {
  const totalDaily = level.examples.reduce(
    (sum, e) => sum + e.deposit * (level.percentage / 100),
    0
  );
  const totalWeekly = totalDaily * 7;
  const totalMonthly = totalDaily * 30;

  const InfoItem = (rule: Rules) => (
    <div className={styles.infoCard}>
      <div className={styles.infoIcon}>{rule.icon}</div>
      <div className={styles.infoText}>{rule.name}</div>
    </div>
  );

  return (
    <div className={styles.card}>
      <h2 className={styles.levelTitle}>{level.title}</h2>

      <div className={styles.rules}>
        {level.rules.map((rule, idx) => (
          <InfoItem key={idx} icon={rule.icon} name={rule.name} />
        ))}
      </div>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>📊 Ejemplo de Ganancia</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <caption className={styles.visuallyHidden}>
              Detalle de depósitos y ganancias
            </caption>
            <thead>
              <tr>
                <th scope="col">Referido</th>
                <th scope="col">Depósito</th>
                <th scope="col">Ganancia ({level.percentage}%)</th>
              </tr>
            </thead>
            <tbody>
              {level.examples.map((ex, i) => (
                <tr key={i}>
                  <td>{ex.name}</td>
                  <td>${ex.deposit.toLocaleString()}</td>
                  <td>
                    ${(ex.deposit * (level.percentage / 100)).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.totalsGrid}>
          <div className={styles.totalCard}>
            <LuCoins className={styles.totalIcon} />
            <p className={styles.totalLabel}>Ganancia diaria</p>
            <p className={styles.totalValue}>
              <CountUp
                end={totalDaily}
                duration={10}
                prefix="$"
                separator="."
                decimals={0}
              />
            </p>
          </div>

          <div className={styles.totalCard}>
            <LuCalendarDays className={styles.totalIcon} />
            <p className={styles.totalLabel}>Ganancia semanal</p>
            <p className={styles.totalValue}>
              <CountUp
                end={totalWeekly}
                duration={2}
                prefix="$"
                separator="."
                decimals={0}
              />
            </p>
          </div>

          <div className={styles.totalCard}>
            <LuCalendarCheck2 className={styles.totalIcon} />
            <p className={styles.totalLabel}>Ganancia mensual</p>
            <p className={styles.totalValue}>
              <CountUp
                end={totalMonthly}
                duration={2}
                prefix="$"
                separator="."
                decimals={0}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLevelCard;
