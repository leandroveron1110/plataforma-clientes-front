import { AffiliateLevel } from "./types/AffiliateLevel";
import AffiliateLevelCard from "./AffiliateLevelCard/AffiliateLevelCard";
import { FaClock, FaMoneyBillWave, FaUserPlus } from "react-icons/fa";
import Header from "../../../components/Header/Header";
import styles from "./AffiliateProgram.module.css";

// const levels: AffiliateLevel[] = [
//   {
//     title: "Conecta",
//     range: "1 a 10 conexiones",
//     percentage: 10,
//     toleranceDays: 5,
//     rules: [
//       {
//         icon: <FaUserPlus />,
//         name: "Conecta entre 1 y 10 personas.",
//       },
//       {
//         icon: <FaMoneyBillWave />,
//         name: "Cobrás el 10% de cada depósito de tus conexiones.",
//       },
//       {
//         icon: <FaClock />,
//         name: "Tus conexiones tienen 5 días para volver a depositar.",
//       },
//     ],
//     examples: [
//       { name: "Ana Fernández", deposit: 5000 },
//       { name: "Pedro Sánchez", deposit: 9500 },
//       { name: "Laura Martínez", deposit: 6000 },
//       { name: "Juan Pérez", deposit: 3000 },
//       { name: "Carlos Díaz", deposit: 2000 },
//       { name: "Lucía Gómez", deposit: 9000 },
//       { name: "José Ramírez", deposit: 2000 },
//       { name: "Laura Martínez", deposit: 4000 },
//       { name: "Sofía López", deposit: 2000 },
//       { name: "Pedro Sánchez", deposit: 5000 },
//       { name: "Diego González", deposit: 4000 },
//       { name: "María Torres", deposit: 1000 },
//       { name: "José Ramírez", deposit: 500 },
//       { name: "Lucía Gómez", deposit: 5000 },
//       { name: "Pedro Sánchez", deposit: 7000 },
//       { name: "Juan Pérez", deposit: 7000 },
//       { name: "Sofía López", deposit: 1000 },
//       { name: "Laura Martínez", deposit: 5000 },
//       { name: "Diego González", deposit: 3000 },
//       { name: "Pedro Sánchez", deposit: 8000 },
//       { name: "Ana Fernández", deposit: 6000 },
//       { name: "Diego González", deposit: 6500 },
//       { name: "Pedro Sánchez", deposit: 4000 },
//       { name: "Lucía Gómez", deposit: 1000 },
//       { name: "José Ramírez", deposit: 1500 },
//       { name: "Lucía Gómez", deposit: 2000 },
//       { name: "Juan Pérez", deposit: 5000 },
//       { name: "María Torres", deposit: 7000 },
//       { name: "María Torres", deposit: 3000 },
//       { name: "Lucía Gómez", deposit: 3000 },
//       { name: "Pedro Sánchez", deposit: 3000 },
//       { name: "José Ramírez", deposit: 1000 },
//       { name: "María Torres", deposit: 5000 },
//       { name: "Diego González", deposit: 1000 },
//       { name: "Diego González", deposit: 2000 },
//     ],
//   },
//   {
//     title: "Impulsa",
//     range: "11 a 30 conexiones",
//     percentage: 12,
//     toleranceDays: 7,
//     rules: [
//       {
//         icon: <FaUserPlus />,
//         name: "Conecta entre 11 y 30 personas.",
//       },
//       {
//         icon: <FaMoneyBillWave />,
//         name: "Cobrás el 12% de cada depósito de tus conexiones.",
//       },
//       {
//         icon: <FaClock />,
//         name: "Tus conexiones tienen 7 días para volver a depositar.",
//       },
//     ],
//     examples: [
//       { name: "Juan Pérez", deposit: 3000 },
//       { name: "Juan Pérez", deposit: 5000 },
//       { name: "Lucía Gómez", deposit: 9000 },
//       { name: "Lucía Gómez", deposit: 7000 },
//       { name: "Carlos Díaz", deposit: 2000 },
//       { name: "Carlos Díaz", deposit: 3000 },
//       { name: "Carlos Díaz", deposit: 5000 },
//       { name: "María Torres", deposit: 7000 },
//       { name: "José Ramírez", deposit: 500 },
//       { name: "Ana Fernández", deposit: 6000 },
//       { name: "Pedro Sánchez", deposit: 9500 },
//       { name: "Laura Martínez", deposit: 5000 },
//       { name: "Sofía López", deposit: 1000 },
//       { name: "Sofía López", deposit: 3000 },
//       { name: "Diego González", deposit: 6500 },
//       { name: "Martín Castro", deposit: 3000 },
//       { name: "Martín Castro", deposit: 7000 },
//       { name: "Martín Castro", deposit: 9000 },
//       { name: "Valentina Rojas", deposit: 4000 },
//       { name: "Valentina Rojas", deposit: 5000 },
//       { name: "Gabriel Herrera", deposit: 3000 },
//       { name: "Gabriel Herrera", deposit: 6000 },
//       { name: "Gabriel Herrera", deposit: 2000 },
//       { name: "Gabriel Herrera", deposit: 7000 },
//       { name: "Elena Vega", deposit: 9000 },
//       { name: "Elena Vega", deposit: 2000 },
//       { name: "Elena Vega", deposit: 1000 },
//       { name: "Santiago Morales", deposit: 8000 },
//       { name: "Santiago Morales", deposit: 5000 },
//       { name: "Santiago Morales", deposit: 2000 },
//       { name: "Emilia Bravo", deposit: 4000 },
//       { name: "Emilia Bravo", deposit: 6000 },
//       { name: "Emilia Bravo", deposit: 9000 },
//       { name: "Emilia Bravo", deposit: 3000 },
//       { name: "Emilia Bravo", deposit: 1000 },
//       { name: "Franco Acosta", deposit: 5000 },
//       { name: "Franco Acosta", deposit: 2000 },
//       { name: "Franco Acosta", deposit: 8000 },
//       { name: "Franco Acosta", deposit: 9000 },
//       { name: "Mateo López", deposit: 7000 },
//       { name: "Mateo López", deposit: 1000 },
//       { name: "Mateo López", deposit: 3000 },
//       { name: "Mateo López", deposit: 4000 },
//       { name: "Camila Torres", deposit: 5000 },
//       { name: "Camila Torres", deposit: 2000 },
//       { name: "Camila Torres", deposit: 8000 },
//       { name: "Agustín Romero", deposit: 6000 },
//       { name: "Agustín Romero", deposit: 9000 },
//       { name: "Agustín Romero", deposit: 4000 },
//       { name: "Martina Herrera", deposit: 7000 },
//       { name: "Martina Herrera", deposit: 3000 },
//       { name: "Martina Herrera", deposit: 5000 },
//       { name: "Felipe Vargas", deposit: 9000 },
//       { name: "Felipe Vargas", deposit: 6000 },
//       { name: "Felipe Vargas", deposit: 7000 },
//       { name: "Isabella Reyes", deposit: 4000 },
//       { name: "Isabella Reyes", deposit: 5000 },
//       { name: "Isabella Reyes", deposit: 2000 },
//       { name: "Tomás Méndez", deposit: 1000 },
//       { name: "Tomás Méndez", deposit: 3000 },
//       { name: "Tomás Méndez", deposit: 4000 },
//     ],
//   },

//   {
//     title: "Potencia",
//     range: "31 o más conexiones",
//     percentage: 15,
//     toleranceDays: 10,
//     rules: [
//       {
//         icon: <FaUserPlus />,
//         name: "Conecta 31 personas o más.",
//       },
//       {
//         icon: <FaMoneyBillWave />,
//         name: "Cobrás el 15% de cada depósito de tus conexiones.",
//       },
//       {
//         icon: <FaClock />,
//         name: "Tus conexiones tienen 10 días para volver a depositar.",
//       },
//     ],
//     examples: [
//       { name: "Juan Pérez", deposit: 5000 },
//       { name: "Juan Pérez", deposit: 3000 },
//       { name: "Juan Pérez", deposit: 7000 },
//       { name: "Lucía Gómez", deposit: 8000 },
//       { name: "Lucía Gómez", deposit: 9000 },
//       { name: "Lucía Gómez", deposit: 1000 },
//       { name: "Lucía Gómez", deposit: 2000 },
//       { name: "Carlos Díaz", deposit: 4000 },
//       { name: "Carlos Díaz", deposit: 5000 },
//       { name: "Carlos Díaz", deposit: 6000 },
//       { name: "Carlos Díaz", deposit: 2000 },
//       { name: "María Torres", deposit: 3000 },
//       { name: "María Torres", deposit: 3000 },
//       { name: "José Ramírez", deposit: 1000 },
//       { name: "Ana Fernández", deposit: 4000 },
//       { name: "Ana Fernández", deposit: 5000 },
//       { name: "Pedro Sánchez", deposit: 7000 },
//       { name: "Pedro Sánchez", deposit: 10000 },
//       { name: "Laura Martínez", deposit: 3000 },
//       { name: "Laura Martínez", deposit: 4000 },
//       { name: "Sofía López", deposit: 2000 },
//       { name: "Sofía López", deposit: 1000 },
//       { name: "Sofía López", deposit: 5000 },
//       { name: "Diego González", deposit: 6000 },
//       { name: "Diego González", deposit: 6000 },
//       { name: "Martín Castro", deposit: 3000 },
//       { name: "Martín Castro", deposit: 7000 },
//       { name: "Valentina Rojas", deposit: 4000 },
//       { name: "Gabriel Herrera", deposit: 6000 },
//       { name: "Gabriel Herrera", deposit: 2000 },
//       { name: "Elena Vega", deposit: 9000 },
//       { name: "Elena Vega", deposit: 7000 },
//       { name: "Santiago Morales", deposit: 8000 },
//       { name: "Emilia Bravo", deposit: 4000 },
//       { name: "Franco Acosta", deposit: 5000 },
//       { name: "Franco Acosta", deposit: 4000 },
//       { name: "Mateo López", deposit: 7000 },
//       { name: "Camila Torres", deposit: 5000 },
//       { name: "Agustín Romero", deposit: 6000 },
//       { name: "Martina Herrera", deposit: 7000 },
//       { name: "Felipe Vargas", deposit: 9000 },
//       { name: "Isabella Reyes", deposit: 4000 },
//       { name: "Tomás Méndez", deposit: 1000 },
//       { name: "Tomás Méndez", deposit: 2000 },
//       { name: "Santiago Paredes", deposit: 3500 },
//       { name: "Antonella Bustos", deposit: 7000 },
//       { name: "Lucas Castillo", deposit: 4000 },
//       { name: "Melina Benítez", deposit: 8500 },
//       { name: "Bruno Domínguez", deposit: 6000 },
//       { name: "Jazmín Toledo", deposit: 5000 },
//       { name: "Matías Correa", deposit: 9000 },
//       { name: "Renata Molina", deposit: 7000 },
//       { name: "Lautaro Ibáñez", deposit: 2000 },
//       { name: "Victoria Ponce", deposit: 7500 },
//       { name: "Thiago Sosa", deposit: 4500 },
//       { name: "Paulina Aguirre", deposit: 8000 },
//       { name: "Federico Figueroa", deposit: 5000 },
//       { name: "Aitana Medina", deposit: 6000 },
//       { name: "Benjamín Núñez", deposit: 7000 },
//       { name: "Martina Silva", deposit: 3000 },
//       { name: "Ignacio Rivas", deposit: 4000 },
//       { name: "Julieta Navarro", deposit: 6500 },
//       { name: "Nicolás Vera", deposit: 5000 },
//       { name: "Valeria Franco", deposit: 8000 },
//       { name: "Damián Rojas", deposit: 5500 },
//       { name: "Catalina Muñoz", deposit: 7000 },
//       { name: "Lucas Gómez", deposit: 4000 },
//       { name: "Abril Sánchez", deposit: 3000 },
//       { name: "Francisco Herrera", deposit: 9000 },
//       { name: "Camila Bustamante", deposit: 8000 },
//       { name: "Emiliano Ortiz", deposit: 7000 },
//       { name: "Tatiana Maldonado", deposit: 6000 },
//       { name: "Julián Morales", deposit: 5000 },
//       { name: "Noelia Álvarez", deposit: 4000 },
//       { name: "Leandro Salinas", deposit: 2000 },
//       { name: "Paula Cabrera", deposit: 1000 },
//     ],
//   },
// ];

const conect: AffiliateLevel[] = [
  {
    title: "Conecta",
    range: "1 a 10 conexiones",
    percentage: 10,
    toleranceDays: 5,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Da tu primer paso conectando entre 1 y 10 personas.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 10% de cada depósito de tus conexiones.",
      },
      {
        icon: <FaClock />,
        name: "Tus conexiones tienen 5 días para volver a depositar.",
      },
    ],
    examples: [
      {
        deposit: 8000 * 10,
        name: "lea",
      },
    ],
  },
  {
    title: "Impulsa",
    range: "11 a 30 conexiones",
    percentage: 15,
    toleranceDays: 6,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Empezá a crecer conectando entre 11 y 30 personas.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 15% de cada depósito de tus conexiones.",
      },
      {
        icon: <FaClock />,
        name: "Tus conexiones tienen 6 días para volver a depositar.",
      },
    ],
    examples: [
      {
        deposit: 8000 * 30,
        name: "lea",
      },
    ],
  },
  {
    title: "Potencia",
    range: "31 a 60 conexiones",
    percentage: 20,
    toleranceDays: 7,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Conectá entre 31 y 60 personas para potenciar tu red.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 20% de cada depósito de tus conexiones.",
      },
      {
        icon: <FaClock />,
        name: "Tus conexiones tienen 7 días para volver a depositar.",
      },
    ],
    examples: [
      {
        deposit: 8000 * 60,
        name: "lea",
      },
    ],
  },
  {
    title: "Triunfa",
    range: "61 a 100 conexiones",
    percentage: 25,
    toleranceDays: 8,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Conectá entre 61 y 100 personas y consolidá tu éxito.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 25% de cada depósito de tus conexiones.",
      },
      {
        icon: <FaClock />,
        name: "Tus conexiones tienen 8 días para volver a depositar.",
      },
    ],
    examples: [
      {
        deposit: 8000 * 100,
        name: "lea",
      },
    ],
  },
  {
    title: "Maximiza",
    range: "101 o más conexiones",
    percentage: 30,
    toleranceDays: 10,
    rules: [
      {
        icon: <FaUserPlus />,
        name: "Conectá más de 100 personas y maximizá tus ganancias.",
      },
      {
        icon: <FaMoneyBillWave />,
        name: "Cobrás el 30% de cada depósito de tus conexiones.",
      },
      {
        icon: <FaClock />,
        name: "Tus conexiones tienen 10 días para volver a depositar.",
      },
    ],
    examples: [
      {
        deposit: 8000 * 200,
        name: "lea",
      },
    ],
  },
];

const AffiliateProgram = () => {
  return (
    <>
      <section className={styles.program}>
        <h1 className={styles.title}>Conecta y ganá</h1>
        <p className={styles.subtitle}>
          Únete a nuestro programa de afiliados y empieza a ganar comisiones por
          cada referencia.
        </p>

        <div className={styles.levelsContainer}>
          {conect.length > 0 ? (
            conect.map((level, i) => (
              <AffiliateLevelCard key={i} level={level} />
            ))
          ) : (
            <p className={styles.noLevels}>
              No hay niveles disponibles por el momento.
            </p>
          )}
        </div>
      </section>

      <Header />
    </>
  );
};

export default AffiliateProgram;
