import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const AutomaticFilterSettingsPage = ({ title, data }) => {
  const [imageURI, setImageURI] = useState("");
  const [selectPopular, setSelectPopular] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title + "Automatic Filter Settings";
  }, [imageURI, selectPopular, title]);

  //click the hidden input tag when choose image btn is clicked
  const chooseImage = () => {
    let inp = document.getElementById("uploadInp");
    inp.click();
  };

  // mock algorithm when choosing an image from gallery or capturing an image using camera
  const detectSkinToneAndCondition = () => {
    let randIndxSkinTone =
      Math.floor(Math.random() * 10) % data.skinToneList.length;
    let randIndxSkinCondition =
      Math.floor(Math.random() * 10) % data.diseaseList.length;
    return {
      skinTone: data.skinToneList[randIndxSkinTone],
      skinCondition: data.diseaseList[randIndxSkinCondition],
    };
  };

  //applyFilter
  const applyFilter = () => {
    if(imageURI) {
      let skinToneAndCondition = detectSkinToneAndCondition();
      window.localStorage.setItem("skinTone", skinToneAndCondition.skinTone);
      window.localStorage.setItem("skinCondition", skinToneAndCondition.skinCondition);
      navigate("/product-listing");
    }
    if(selectPopular) {
      window.localStorage.getItem("skinTone");
      window.localStorage.getItem("skinCondition");
      navigate("/product-listing");
    }
  }

  // choose a from filesystem, gallery or capture one using the camera also unmaked the popular image if selected
  const changeImage = (evt) => {
    let file = evt.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImageURI(fileReader.result);
    };
    fileReader.onloadend = () => {
      setSelectPopular(false);
      let divs = document.querySelectorAll(".selectImg");
      divs.forEach((div) => {
        div.getElementsByTagName("img")[0].style.display = "none";
        div.style.opacity = "1";
      });
    };
  };


  // reset the settings
  const handleReset = () => {
    if (imageURI || selectPopular) {
      setImageURI("");
      setSelectPopular(false);
      let divs = document.querySelectorAll(".selectImg");
      divs.forEach((div) => {
        div.getElementsByTagName("img")[0].style.display = "none";
        div.style.opacity = "1";
      });
    }
  };

  // mark the selected image manually
  const markSelectedImage = (evt) => {
    let divs = document.querySelectorAll(".selectImg");
    divs.forEach((div) => {
      div.getElementsByTagName("img")[0].style.display = "none";
      div.style.opacity = "0.3";
    });
    evt.currentTarget.childNodes[0].style.display = "block";
    evt.currentTarget.style.opacity = "1";
    setSelectPopular(true);
    setImageURI("");
  };

  return (
    <div className={styles.automaticFilterSettingsPage} id="container">
      <div className={styles.header}>
        Take a photo of your skin to determine skin tone and condition
      </div>
      <div className={styles.customFileUploadWrapper}>
        {imageURI ? (
          <img className={styles.choosenImg} src={imageURI} alt="" />
        ) : (
          <img
            className={styles.defaultImg}
            src="../assets/img/avatar.svg"
            alt=""
          />
        )}

        <input
          type="file"
          accept="image/png, image/jpg, img/jpeg, img/webp"
          id="uploadInp"
          onChange={changeImage}
        />
        <button
          className={`${styles.btn} ${styles.customUploadBtn}`}
          onClick={chooseImage}
        >
          Choose Image
        </button>
      </div>
      <div className={styles.header}>
        <p style={{ textAlign: "center", fontSize: "20px" }}>Or</p>
        <p>select one of the popular images</p>
      </div>
      <div className={styles.popularImageList}>
        {data.popularImageList.map((img, indx) => {
          return (
            <div
              className={`selectImg ${styles.imgWrapper}`}
              key={indx}
              onClick={(evt) => {
                window.localStorage.setItem("skinTone", img.skinTone);
                window.localStorage.setItem("skinCondition", img.skinCondition);
                markSelectedImage(evt);
              }}
            >
              <img
                className={styles.greenTick}
                src="../assets/img/green-tick.png"
                alt=""
              />
              <img className={styles.popularImg} src={img.src} alt="" />
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        
        <button onClick={applyFilter}
          className={`${styles.btn} ${styles.setFilterBtn}`}
          style={{ opacity: imageURI || selectPopular ? "1" : "0.3" }}
        >
          Apply
        </button>
        <button
          className={`${styles.btn} ${styles.setFilterBtn}`}
          onClick={handleReset}
          style={{ opacity: imageURI || selectPopular ? "1" : "0.3" }}
        >
          Reset
        </button>
        <Link to="/manual-filter-skin-tone">
          <button className={`${styles.btn} ${styles.setFilterBtn}`}>
            Set Manually
          </button>
        </Link>
      </div>
    </div>
  );
};
export default AutomaticFilterSettingsPage;
