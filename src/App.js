import contract from "./contracts/NFTCollectible.json";
import React, { useState } from "react";
import NftDetection from "./components/NftDetection";
import SplashPage from "./pages/SplashPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
import RedirectPage from "./pages/RedirectPage";
import useKey from "./hooks/useKey";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        {/* <Route exact path="/success" element={<RouteGuard />}> */}
        <Route exact path="/success" element={<RedirectPage />} />
        {/* </Route> */}
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
