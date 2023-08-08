import React from "react";
import styles from "./style.module.css";

function Product({ name, src, price }) {
  return (
    <div className={styles.product}>
      <span className={styles.productPrice}>${price}</span>
      <img className={styles.productImg} src={src} alt=""/>
      <div className={styles.productName}>{name}</div>
    </div>
  );
}

export default Product;
