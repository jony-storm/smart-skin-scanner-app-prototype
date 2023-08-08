import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AccessibilitySettingsPage from "./pages/accessibility-settings/AccessibilitySettingsPage";
import ManualFilterSkinTonePage from "./pages/manual-filter-skin-tone/ManualFilterSkinTonePage";
import ManualFilterSkinConditionPage from "./pages/manual-filter-skin-condition/ManualFilterSkinConditionPage";
import AutomaticFilterSettingsPage from "./pages/automatic-filter-settings/AutomaticFilterSettingsPage";
import ProductListPage from "./pages/product-listing/ProductListPage";
import data from "./data";

function App() {
  const appTitle = "Smart Skin Scanner | ";

  // clear the localStorage when starting the app
  useEffect(() => {
    return () => {
      window.localStorage.clear();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <LoginPage
              title={appTitle}
              logoSrc={data.companyLogo}
            />
          }
        />
        <Route
          path="accessibility-settings"
          element={
            <AccessibilitySettingsPage
              title={appTitle}
              settingList={data.accessibilitySettingList}
            />
          }
        />
        <Route
          path="automatic-filter-settings"
          element={<AutomaticFilterSettingsPage title={appTitle} data={data} />}
        />
        <Route
          path="manual-filter-skin-tone"
          element={
            <ManualFilterSkinTonePage
              skinToneList={data.skinToneList}
              title={appTitle}
            />
          }
        />
        <Route
          path="manual-filter-skin-condition"
          element={
            <ManualFilterSkinConditionPage
              diseaseList={data.diseaseList}
              title={appTitle}
            />
          }
        />
        <Route
          path="product-listing"
          element={
            <ProductListPage
              title={appTitle}
              productRecomList={data.productRecomList}
              skinTypeList={data.skinToneList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
