import React, { useState } from "react";
import RulesModal from "./RulesModal";
import TeamSelection from "./TeamSelection";
import gummyBearRed from './assets/gummy_bear_red.png';
import gummyBearBlue from './assets/gummy_bear_blue.png';
import gummyBearGreen from './assets/gummy_bear_green.png';
import gummyBearYellow from './assets/gummy_bear_yellow.png';
import gummyBear from './assets/gummy_bear.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameStep, setGameStep] = useState("menu");
  const [teams, setTeams] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const gummyBears = [gummyBearRed, gummyBearBlue, gummyBearGreen, gummyBearYellow, gummyBear];

  // Функция для хаотичного расположения мармеладных мишек
  const getGummyBearStyles = () => {
    return Array.from({ length: 25 }).map((_, index) => {
      const top = Math.random() * 50 + 25;
      const left = Math.random() * 50 + 25;

      const distanceFromCenter = Math.sqrt(Math.pow(top - 50, 2) + Math.pow(left - 50, 2));
      const size = Math.max(100 - distanceFromCenter * 1.5, 30);
      const maxSize = size > 200 ? 200 : size;

      const isLargeBear = Math.random() < 0.1;
      const largeSize = isLargeBear ? 300 : maxSize;

      const blur = largeSize < 100 ? Math.min(distanceFromCenter * 0.15, 10) : 0;

      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: Math.random() * 0.7 + 0.3,
        size: largeSize,
        blur,
      };
    });
  };

  const gummyBearStyles = getGummyBearStyles();

  if (gameStep === "teamSelection") {
    return <TeamSelection onStartGame={(selectedTeams) => {
      setTeams(selectedTeams);
      setGameStep("game"); 
    }} />;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Alias Game</h1>

      <div style={styles.gummyBearsContainer}>
        {gummyBearStyles.map((style, index) => (
          <img
            key={index}
            src={gummyBears[Math.floor(Math.random() * gummyBears.length)]}
            alt="Gummy Bear"
            style={{
              ...styles.gummyBear,
              top: style.top,
              left: style.left,
              transform: style.transform,
              opacity: style.opacity,
              width: `${style.size}px`,
              height: `${style.size}px`,
              filter: `blur(${style.blur}px)`,
            }}
          />
        ))}
      </div>

      <button style={styles.buttonStart} onClick={() => setGameStep("teamSelection")}>Новая игра</button>
      <button style={styles.buttonRules} onClick={handleOpenModal}>Правила</button>

      <RulesModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #d32f2f, #b71c1c)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Comic Sans MS', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#fff",
    zIndex: 2,
  },
  gummyBearsContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    pointerEvents: "none",
    zIndex: 1,
  },
  gummyBear: {
    position: "absolute",
    objectFit: "contain",
    transition: "transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease",
  },
  buttonStart: {
    padding: "15px 30px",
    margin: "10px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#ff9800",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
    zIndex: 3,
    filter: "drop-shadow(0 0 5px rgba(255, 152, 0, 0.8))",
  },
  buttonRules: {
    padding: "15px 30px",
    margin: "10px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#66bb6a",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
    zIndex: 3,
    filter: "drop-shadow(0 0 8px rgba(102, 187, 106, 0.8))",
  },
};

export default App;
