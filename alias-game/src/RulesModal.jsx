import React from 'react';

function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 style={styles.title}>Правила игры Alias</h2>
        
        <div style={styles.content}>
          <div style={styles.characterContainer}>
            <div style={styles.character}></div>
            <div style={styles.character}></div>
            <div style={styles.character}></div>
          </div>

          <h3 style={styles.sectionTitle}>Цель игры</h3>
          <p style={styles.text}>Разъясните слова, используя описания, синонимы и антонимы. Цель игры – помочь другому игроку или команде правильно отгадать наибольшее количество слов, прежде чем полностью пересыплется песок в песочных часах. Выигрывает команда, которая первой достигнет финиша!</p>

          <h3 style={styles.sectionTitle}>Краткие правила игры</h3>
          <ol style={styles.list}>
            <li>Команды играют поочередно. Разъясняющий меняется в каждом туре.</li>
            <li>Количество разгаданных слов соответствует количеству шагов по игровому полю.</li>
            <li>Ошибки и неугаданные слова — штрафные очки.</li>
            <li>Побеждает команда, которая первая достигнет финиша.</li>
          </ol>

          <h3 style={styles.sectionTitle}>Разъяснение слов</h3>
          <p style={styles.text}>На карточках могут быть существительные, глаголы, прилагательные и другие слова. Нельзя использовать части разгадываемого слова или однокоренные слова.</p>

          <h3 style={styles.sectionTitle}>Штрафные очки</h3>
          <p style={styles.text}>За ошибочные объяснения и пропущенные карточки начисляются штрафные очки.</p>

          <button style={styles.closeButton} onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '15px',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    color: '#333',
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    fontFamily: "'Comic Sans MS', sans-serif",
    color: '#d32f2f',  // Красный
  },
  characterContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  character: {
    width: '50px',
    height: '50px',
    backgroundColor: 'orange',
    borderRadius: '50%',
    margin: '0 10px',
    position: 'relative',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontFamily: "'Comic Sans MS', sans-serif",
    fontWeight: 'bold',
    color: '#1976d2',  // Синий
  },
  text: {
    fontSize: '1rem',
    marginBottom: '10px',
    lineHeight: '1.5',
    fontFamily: "'Arial', sans-serif",
    color: '#333',
  },
  list: {
    textAlign: 'left',
    marginLeft: '20px',
    fontSize: '1rem',
    color: '#333',
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 25px',
    fontSize: '1.1rem',
    backgroundColor: '#4caf50',  // Зеленый
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  closeButtonHover: {
    backgroundColor: '#388e3c',
  }
};

export default RulesModal;
