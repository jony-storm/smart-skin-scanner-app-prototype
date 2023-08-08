import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import Radio from "../../components/radio/Radio";
import Button from "../../components/button/Button";

function ManualFilterSkinTonePage({ title, skinToneList }) {
  const [checkedCount, setCheckedCount] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    document.title = title + "Manual Filter Skin Tone";
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
    <div className={styles.manualFilterSkinTonePage}>
      <div className={styles.pageHeader}>Select Your Skin Type</div>
      <ul className={styles.skinToneList}>
        {skinToneList.map((ele, indx) => {
          return (
            <li
              className={styles.wrapper}
              key={indx}
              onClick={(evt) => {
                window.localStorage.setItem("skinTone", skinToneList[indx]);
                handleClick(evt);
              }}
            >
              <Radio radioLabel={ele} />
            </li>
          );
        })}
      </ul>
      <div className={styles.footer}>
        <Button btnLabel="skip" redirectLrl="/manual-filter-skin-condition" />
        <Button
          disabled={disabled}
          btnLabel="apply"
          redirectUrl="/manual-filter-skin-condition"
        />
      </div>
    </div>
  );
}

export default ManualFilterSkinTonePage;
