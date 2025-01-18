import React, { useState } from "react";
import RulesModal from "./RulesModal";
import gummyBearRed from './assets/gummy_bear_red.png';
import gummyBearBlue from './assets/gummy_bear_blue.png';
import gummyBearGreen from './assets/gummy_bear_green.png';
import gummyBearYellow from './assets/gummy_bear_yellow.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const gummyBears = [
    gummyBearRed,
    gummyBearBlue,
    gummyBearGreen,
    gummyBearYellow,
  ];

  // Функция для вычисления размытия и размера мишек
  const getGummyBearStyles = () => {
    return Array.from({ length: 25 }).map((_, index) => {
      const top = Math.random() * 50 + 25; // Хаотичное вертикальное расположение, чтобы мишки были ближе к центру
      const left = Math.random() * 50 + 25; // Хаотичное горизонтальное расположение

      // Рассчитываем расстояние от центра экрана (центр = 50% по осям X и Y)
      const distanceFromCenter = Math.sqrt(Math.pow(top - 50, 2) + Math.pow(left - 50, 2));

      // Размер мишки зависит от расстояния от центра
      const size = Math.max(100 - distanceFromCenter * 1.5, 30); // Мишки ближе к центру - большие, дальше - маленькие
      // Ограничение размера мишек
      const maxSize = size > 200 ? 200 : size;

      // Добавляем большие мишки
      const isLargeBear = Math.random() < 0.1; // 10% вероятность, что мишка будет большим
      const largeSize = isLargeBear ? 300 : maxSize;

      // Размытие тоже зависит от размера: чем больше мишка, тем меньше размытие
      const blur = largeSize < 100 ? Math.min(distanceFromCenter * 0.15, 10) : 0; // Уменьшаем размытие для крупных мишек

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

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Alias Game</h1>

      {/* Мармеладные мишки с хаотичным расположением */}
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
              filter: `blur(${style.blur}px)`, // Размытие зависит от расстояния и размера
            }}
          />
        ))}
      </div>

      <button style={styles.buttonStart} onClick={() => alert("Начинаем игру!")}>Новая игра</button>
      <button style={styles.buttonRules} onClick={handleOpenModal}>Правила</button>

      {/* Модальное окно с правилами */}
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
    background: "linear-gradient(to bottom, #d32f2f, #b71c1c)", // Градиент из двух оттенков красного
    color: "#fff", // Белый текст
    textAlign: "center",
    fontFamily: "'Comic Sans MS', sans-serif",
    position: "relative", // Для хаотичного расположения мишек
    overflow: "hidden", // Чтобы мишки иногда выходили за пределы экрана
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#fff", // Белый текст
    zIndex: 2, // Чтобы текст был поверх всех элементов
  },
  gummyBearsContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    pointerEvents: "none", // Мишки не должны мешать нажатию кнопок
    zIndex: 1, // Мишки будут под кнопками
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
    backgroundColor: "#ff9800", // Оранжевая мармеладная кнопка
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
    zIndex: 3, // Кнопки будут выше мишек
    filter: "drop-shadow(0 0 5px rgba(255, 152, 0, 0.8))", // Светящийся эффект оранжевого цвета
  },
  buttonRules: {
    padding: "15px 30px",
    margin: "10px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#66bb6a", // Более яркий мармеладный зеленый цвет
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
    zIndex: 3, // Кнопки будут выше мишек
    filter: "drop-shadow(0 0 8px rgba(102, 187, 106, 0.8))", // Светящийся эффект яркого зеленого цвета
  },
};

export default App;
