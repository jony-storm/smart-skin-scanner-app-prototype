import React from "react";
import styles from "./style.module.css";

function Loading() {
  return (
    <div className={styles.showLoading}>
      <img src="../assets/img/loading.gif" alt="" />
    </div>
  );
}

export default Loading;
