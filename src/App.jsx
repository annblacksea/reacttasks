import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
  // Можно задать 2 состояния — steps и activeIndex
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStep = () => setActiveIndex(activeIndex + 1);
  const previosStep = () => setActiveIndex(activeIndex - 1);
  const startStep = () => setActiveIndex(0);

  let firstStep = activeIndex === 0;
  let lastStep = activeIndex >= steps.length - 1;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>{steps[activeIndex].content}</div>
          <ul className={styles['steps-list']}>
            {steps.map((element, index) => {
              return (
                <li
                  className={`${styles['steps-item']} + ${
                    activeIndex === index ? styles.active : ''
                  } + ${activeIndex >= index ? styles.done : ''}`}
                  key={element.id}
                >
                  <button
                    className={styles['steps-item-button']}
                    onClick={() => setActiveIndex(index)}
                  >
                    {index + 1}
                  </button>
                  <p>{element.title}</p>
                </li>
              );
            })}
          </ul>
          <div className={styles['buttons-container']}>
            <button className={styles.button} onClick={previosStep} disabled={firstStep}>
              Назад
            </button>
            <button className={styles.button} onClick={lastStep ? startStep : nextStep}>
              {lastStep ? 'Начать сначала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
