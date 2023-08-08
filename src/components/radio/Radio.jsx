import React from 'react';
import styles from './style.module.css';

function Radio({radioLabel}) {
  const handleClick = (evt) => {
    evt.currentTarget.setAttribute("checked", true);
  }
  return (
    <label className={styles.radio} > {radioLabel}
      <input type="radio" name="radio" onClick={handleClick}/>
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default Radio;
