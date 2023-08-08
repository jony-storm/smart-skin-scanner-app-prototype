import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const LoginPage = ({ title, logoSrc }) => {
  const [disabled, setDisabled] = useState(true);
  const phoneNumRef = useRef("");
  const [phoneNum, setPhoneNum] = useState(phoneNumRef.current);
  const countryCodes = ["+93", "+355", "+880", "+01", "+358"];

  //setting the title of the page
  useEffect(() => {
    document.title = title + "Welcome Home";
  }, [title]);

  // set disabled to true if phoneNum is empty otherwise set it to false
  useEffect(() => {
    if(phoneNum === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [phoneNum, disabled]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.top}>
        <img
          className={styles.companyLogo}
          src={logoSrc}
          alt=""
        />
      </div>
      <div className={styles.middle}>
        <div className={styles.imageList}>
          <img
            className={styles.personImg}
            src="../assets/img/african.png"
            alt="african woman"
          />
          <img
            className={styles.personImg}
            src="../assets/img/american.png"
            alt="amerian woman"
          />
          <img
            className={styles.personImg}
            src="../assets/img/asian.png"
            alt="asian woman"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.loginForm}>
          <div className={styles.loginFormHeader}>
            Login with your Phone Number
          </div>
          <div className={styles.phoneNumInputWrapper}>
            <select>
              {
                countryCodes.map((countryCode, indx) => {
                  return <option value={indx} key={indx}>{countryCode}</option>
                })
              }
            </select>
            <input ref={phoneNumRef}
              className={styles.phoneNumInput}
              type="text"
              onChange={() => {setPhoneNum(phoneNumRef.value)}}
              placeholder="328957239124"
            />
          </div>
          <button className={styles.sendOtpBtn} disabled={disabled} style={{opacity: disabled ? "0.3" : 1}}>
            <Link to={disabled ? "" : "/accessibility-settings"}>Send OTP</Link>
          </button>
        </div>
        <div className={styles.loginWithOptions}>
          <div className={styles.topWrapper}>
            <span className={styles.hr}></span>
            <span className={styles.loginOptionTxt}>Or Login with</span>
            <span className={styles.hr}></span>
          </div>
          <div className={styles.iconWrapper}>
            <Link className={styles.rectangle} to="/accessibility-settings">
              <img src="../assets/icon/logoapple.svg" alt="apple logo" />
            </Link>
            <Link className={styles.rectangle} to="/accessibility-settings">
              <img src="../assets/icon/logofacebook.svg" alt="facebook logo" />
            </Link>
            <Link className={styles.rectangle} to="/accessibility-settings">
              <img src="../assets/icon/logogoogle.svg" alt="google logo" />
            </Link>
            <Link className={styles.rectangle} to="/accessibility-settings">
              <img src="../assets/icon/logotwitter.svg" alt="twitter logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
