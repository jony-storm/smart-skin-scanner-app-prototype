import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import Loading from "../../components/loading/Loading";
import styles from "./style.module.css";

function ProductListPage({ title, productRecomList, skinTypeList }) {
  const [showLoading, setShowLoading] = useState(true);
  const [skinType, setSkinType] = useState(window.localStorage.getItem("skinTone"));
  const skinTypeRef = useRef("");

  useEffect(() => {
    document.title = title + "Product Listing";
  }, [title, productRecomList]);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    
  }, [skinTypeRef.current]);
  return (
    <div className={styles.productListingPage}>
      {showLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className={styles.productFilterOption}>
            <div className={styles.left}>
              <div className={styles.greyText}>Skin Type</div>
              <div className={styles.selectedSkinTone}>
                <select ref={skinTypeRef} onChange={() => setSkinType(skinTypeRef.current)}>
                  {skinTypeList.map((skinType, indx) => {
                    return (
                      <option value={indx} key={indx}>
                        {skinType}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className={styles.right}>
              <Link to="/automatic-filter-settings">
                <img
                  src="../assets/icon/filter-solid.svg"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <img src="../assets/icon/shoppingcart.svg" alt="" />
            </div>
          </div>
          <div className={styles.productRecomBannerWrapper}>
            <div className={styles.productRecomHeader}>
              Cosmetic Recommendation
            </div>
            <img src="../assets/img/cosmetic-recommendation.png" alt="" />
          </div>
          {productRecomList.map((productRecom, indx) => {
            return (
              <div className={styles.productWrapper} key={indx}>
                <div className={styles.productsHeader}>
                  {window.localStorage.getItem("skinCondition")}{" "}
                  {productRecom.type}
                </div>
                <div className={styles.cosmeticWrapper}>
                  {productRecom.products.map((product, indx) => {
                    return (
                      <Product
                        key={indx}
                        name={product.name}
                        src={product.src}
                        price={product.price}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProductListPage;
