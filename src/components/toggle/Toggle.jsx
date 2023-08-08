import React from 'react';
import styles from './style.module.css';

function Toggle({switchLabel}) {
  const handleClick = (evt) => {
    evt.currentTarget.setAttribute("checked", true);
  }
  return (
    <div className={styles.toggleWrapper}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={handleClick}/>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span> {switchLabel}</span>
    </div>
  );
}

export default Toggle;
