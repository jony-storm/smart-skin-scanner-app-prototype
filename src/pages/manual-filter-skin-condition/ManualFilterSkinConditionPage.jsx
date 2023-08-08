import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import Toggle from "../../components/toggle/Toggle";
import Button from "../../components/button/Button";

function ManualFilterSkinConditionPage({ title, diseaseList }) {
  const [checkedCount, setCheckedCount] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    document.title = title + "Manual Filter Skin Condition";
  }, [title]);

  useEffect(() => {
    if (checkedCount >= 1) {
      setDisabled(false);
    }
  }, [disabled, checkedCount]);

  const handleClick = (evt) => {
    let count =
      evt.target.parentElement.querySelectorAll("input[checked]").length;
    setCheckedCount(count);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>Disease</div>
      <div className={styles.pageSubHeader}>Do You Have Any Disease?</div>
      <ul className={styles.diseaseList}>
        {diseaseList.map((ele, indx) => {
          return (
            <li
              onClick={(evt) => {
                window.localStorage.setItem("skinCondition", diseaseList[indx]);
                handleClick(evt);
              }}
              className={styles.wrapper}
              key={indx}
            >
              <Toggle switchLabel={ele} />
            </li>
          );
        })}
      </ul>
      <div className={styles.footer}>
        <Button btnLabel="skip" redirectUrl="/product-listing"/>
        <Button btnLabel="apply" redirectUrl="/product-listing" disabled={disabled} style={{opacity: disabled ? "0.3" : "1"}}/>
      </div>
    </div>
  );
}

export default ManualFilterSkinConditionPage;
