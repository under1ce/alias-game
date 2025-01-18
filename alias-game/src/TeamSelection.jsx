import React, { useState } from "react";
import { nanoid } from "nanoid"; // Для генерации уникальных идентификаторов
import bearsImage from './assets/bears.png'; // Картинка с тремя мишками

function TeamSelection({ onStartGame }) {
  const [teams, setTeams] = useState([
    { id: nanoid(), name: "Пикми" },
    { id: nanoid(), name: "Убежища" },
  ]);
  const [showAddButton, setShowAddButton] = useState(false); // Для отслеживания состояния кнопки добавления

  const handleAddTeam = () => {
    setTeams([...teams, { id: nanoid(), name: "Найк Про" }]);
    setShowAddButton(true); // Показываем кнопку с анимацией
  };

  const handleTeamNameChange = (id, newName) => {
    setTeams(teams.map(team => team.id === id ? { ...team, name: newName } : team));
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}></div> {/* Фон с мишками */}

      <h2 style={styles.title}>Выбор команд</h2>

      <div style={styles.teamsList}>
        {teams.map((team, index) => (
          <div key={team.id} style={{ ...styles.teamItem, animation: `fadeIn 0.5s ease-out ${index * 0.2}s` }}>
            <input
              type="text"
              value={team.name}
              onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
              style={styles.teamInput}
            />
          </div>
        ))}
      </div>

      <button onClick={handleAddTeam} className={`addButton ${showAddButton ? "animateButton" : ""}`}>
        +
      </button>
      <button onClick={() => onStartGame(teams)} className="startButton">
        Начать игру
      </button>
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
    backgroundColor: "#d32f2f", // Красный фон, как в стартовом меню
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundImage: `url(${bearsImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.6, // Убираем прозрачность, чтобы мишки были ярче
    filter: "blur(6px)", // Размытие для фона
    zIndex: 0,
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#fff", // Белый текст для контраста
    zIndex: 1,
    marginBottom: "20px",
    animation: "fadeIn 1s ease-out", // Плавное появление заголовка
  },
  teamsList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
    marginBottom: "20px",
  },
  teamItem: {
    margin: "10px 0",
    animation: "fadeIn 0.5s ease-out",
  },
  teamInput: {
    padding: "10px",
    fontSize: "1.2rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "200px",
    textAlign: "center",
    transition: "all 0.3s ease", // Плавный переход при изменении
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Тень для фокуса
    marginBottom: "10px",
    zIndex: 1,
  },
};

// Добавим CSS анимации и стили для кнопок
const buttonStyles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes appearButton {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .addButton {
    margin: 10px;
    padding: 12px 24px;
    font-size: 2rem;
    border: none;
    border-radius: 50%;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0; /* Изначально невидимая */
    animation: appearButton 0.5s ease-out forwards; /* Появление с анимацией */
  }

  .animateButton {
    opacity: 1; /* Как только анимация завершится, кнопка станет видимой */
  }

  .addButton:hover {
    transform: scale(1.1);
    background-color: #388e3c; /* Более темный зеленый при наведении */
  }

  .startButton {
    padding: 12px 24px;
    font-size: 1.5rem;
    border: none;
    border-radius: 8px;
    background-color: #ff9800;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease-out;
  }

  .startButton:hover {
    transform: scale(1.05);
    background-color: #f57c00; /* Более темный оранжевый при наведении */
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${buttonStyles}</style>`);

export default TeamSelection;
