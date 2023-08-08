import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import Toggle from "../../components/toggle/Toggle";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

function AccessibilitySettingsPage({ settingList, title }) {
  const [showLoading, setShowLoading] = useState(true);
  const handleClick = (evt) => {
    let divs = document.querySelectorAll(".selectSize");
    divs.forEach((div) => {
      div.style.backgroundColor = "white";
    });
    evt.currentTarget.style.backgroundColor = "#EEF5FF";
    console.log(evt);
  };

  useEffect(() => {
    document.title = title + "Accessibility Settings";
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 400);
  }, []);

  return (
    <div className={styles.container}>
      {showLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className={styles.pageHeader}>Accessibility Settings</div>
          <ul className={styles.settingList}>
            {settingList.map((ele, indx) => {
              return (
                <li className={styles.wrapper} key={indx}>
                  <Toggle switchLabel={ele} />
                </li>
              );
            })}
          </ul>
          <div className={styles.textSizeSelection}>
            <div className={styles.selectionHeader}>Select Text Size</div>
            <div className={styles.optionWrapper}>
              <div
                className={`${styles.small} selectSize`}
                onClick={handleClick}
              >
                A
              </div>
              <div
                className={`${styles.medium} selectSize`}
                onClick={handleClick}
              >
                A
              </div>
              <div
                className={`${styles.large} selectSize`}
                onClick={handleClick}
              >
                A
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Button
              btnLabel="skip"
              redirectUrl="/automatic-filter-settings"
            />
            <Button
              btnLabel="apply"
              redirectUrl="/automatic-filter-settings"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default AccessibilitySettingsPage;
