import { AffiliateLevel } from "./types/AffiliateLevel";
import AffiliateLevelCard from "./AffiliateLevelCard/AffiliateLevelCard";
import { FaClock, FaMoneyBillWave, FaUserPlus } from "react-icons/fa";
import Header from "../../../components/Header/Header";

const levels: AffiliateLevel[] = [
  {
    title: "🥇 Nivel 1",
    range: "1 a 10 referidos",
    percentage: 10,
    toleranceDays: 5,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Afiliá entre 1 y 10 personas.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 10% de cada depósito de tus referidos.",
      },
      {
        icon: <FaClock />,
        name: "Tus referidos tienen 5 días para volver a depositar.",
      },
    ],
    examples: [
      { name: "Laura", deposit: 2500 },
      { name: "Pedro", deposit: 3000 },
      { name: "Carla", deposit: 4500 },
      { name: "Mateo", deposit: 5000 },
      { name: "Julieta", deposit: 6000 },
      { name: "Nico", deposit: 7000 },
      { name: "Tomi", deposit: 3500 },
    ],
  },
  {
    title: "🥈 Nivel 2",
    range: "11 a 30 referidos",
    percentage: 12,
    toleranceDays: 7,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Afiliá entre 11 y 30 personas.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 12% de cada depósito de tus referidos.",
      },
      {
        icon: <FaClock />,
        name: "Tus referidos tienen 7 días para volver a depositar.",
      },
    ],
    examples: [
      { name: "Agus", deposit: 2500 },
      { name: "Sofi", deposit: 2800 },
      { name: "Tomás", deposit: 3000 },
      { name: "Fede", deposit: 3500 },
      { name: "Sofi", deposit: 4200 }, // Sofi recarga de nuevo
      { name: "Cami", deposit: 4000 },
      { name: "Dani", deposit: 5000 },
      { name: "Pablo", deposit: 6000 },
      { name: "Pablo", deposit: 4000 }, // Pablo recarga
      { name: "Luli", deposit: 7000 },
      { name: "Gonza", deposit: 8000 },
      { name: "Martina", deposit: 8500 },
      { name: "Rocío", deposit: 9000 },
      { name: "Diego", deposit: 9500 },
      { name: "Flor", deposit: 10000 },
      { name: "Flor", deposit: 7500 }, // Flor recarga
      { name: "Maxi", deposit: 7200 },
      { name: "Valen", deposit: 6500 },
      { name: "Leo", deposit: 4100 },
      { name: "Emma", deposit: 4600 },
      { name: "Lautaro", deposit: 5200 },
      { name: "Sol", deposit: 3800 },
      { name: "Bruno", deposit: 2950 },
      { name: "Gabi", deposit: 3100 },
      { name: "Ramiro", deposit: 7000 },
      { name: "Mica", deposit: 7700 },
      { name: "Lucía", deposit: 8800 },
    ],
  },

  {
    title: "🥉 Nivel 3",
    range: "31 o más referidos",
    percentage: 15,
    toleranceDays: 10,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Afiliá 31 personas o más.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 15% de cada depósito de tus referidos.",
      },
      {
        icon: <FaClock />,
        name: "Tus referidos tienen 10 días para volver a depositar.",
      },
    ],
    examples: [
      { name: "Ana", deposit: 2500 },
      { name: "Luis", deposit: 3200 },
      { name: "Juan", deposit: 4000 },
      { name: "María", deposit: 4500 },
      { name: "Sebas", deposit: 3000 },
      { name: "Carla", deposit: 3500 },
      { name: "Juli", deposit: 5000 },
      { name: "Fran", deposit: 4200 },
      { name: "Fran", deposit: 3200 },
      { name: "Lola", deposit: 2700 },
      { name: "Mati", deposit: 3100 },
      { name: "Luz", deposit: 4800 },
      { name: "Gabi", deposit: 2900 },
      { name: "Nacho", deposit: 3600 },
      { name: "Feli", deposit: 5300 },
      { name: "Meli", deposit: 6100 },
      { name: "Gonza", deposit: 5700 },
      { name: "Lau", deposit: 4600 },
      { name: "Lau", deposit: 3100 },
      { name: "Emma", deposit: 3900 },
      { name: "Rodri", deposit: 4300 },
      { name: "Lucho", deposit: 6000 },
      { name: "Sofi", deposit: 7000 },
      { name: "Sol", deposit: 3400 },
      { name: "Tomy", deposit: 3800 },
      { name: "Majo", deposit: 7200 },
      { name: "Rama", deposit: 8000 },
      { name: "Nati", deposit: 8700 },
      { name: "Euge", deposit: 9000 },
      { name: "Alan", deposit: 9400 },
      { name: "Ema", deposit: 9600 },
      { name: "Nico", deposit: 10000 },
      { name: "Vicky", deposit: 7300 },
      { name: "Maru", deposit: 6300 },
      { name: "Lea", deposit: 5500 },
      { name: "Flor", deposit: 7800 },
      { name: "Caro", deposit: 8500 },
      { name: "Pablo", deposit: 9100 },
      { name: "Tomi", deposit: 8200 },
      { name: "Martu", deposit: 6800 },
      { name: "Jero", deposit: 7600 },
      { name: "Dani", deposit: 6900 },
      { name: "Cami", deposit: 7000 },
      { name: "Fio", deposit: 7900 },
      { name: "Mili", deposit: 6000 },
    ],
  },
];

const AffiliateProgram = () => {
  return (
    <>
      <h1 style={{ color: "var(--title-pink)", textAlign: "center" }}>
        Sistema de Afiliados
      </h1>
      {levels.map((level, i) => (
        <AffiliateLevelCard key={i} level={level} />
      ))}

      <Header />
    </>
  );
};

export default AffiliateProgram;
