import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Button({ btnLabel, redirectUrl, disabled }) {
  if (btnLabel === "skip") {
    return (
      <Link to={redirectUrl} className={`${styles.skipBtn} ${styles.btn}`}>
        {btnLabel}
      </Link>
    );
  } else {
    return (
      <Link
        to={disabled ? "" : redirectUrl}
        className={`${styles.applyBtn} ${styles.btn}`}
        disabled={disabled}
        style={{ opacity: disabled ? "0.3" : "1" }}
      >
        {btnLabel}
      </Link>
    );
  }
}

export default Button;
