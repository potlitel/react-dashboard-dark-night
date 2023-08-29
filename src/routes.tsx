import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Orders from "./components/Orders";
import MainContent from "./components/MainContent";
import nprogress from "nprogress";
import Carddemo from "./components/Carddemo";
// import Nav1 from "./components/Nav1";
// import Nav2 from "./components/Nav2";
// import Nav3 from "./components/Nav3";
// import Nav4 from "./components/Nav4";
// import Nav5 from "./components/Nav5";
// import Home from "./components/Home";
// import Nav6 from "./components/Nav6";

export default function Rutas() {
  let location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/card" element={<Carddemo />} />
      {/* <Route exact path="/nav2" element={<Nav2 />} />
      <Route exact path="/nav3" element={<Nav3 />} />
      <Route exact path="/nav4" element={<Nav4 />} />
      <Route exact path="/nav5" element={<Nav5 />} />
      <Route exact path="/nav6" element={<Nav6 />} /> */}
      {/* <Route path="" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<NotFoundPage />} /> */}
    </Routes>
  );
}
