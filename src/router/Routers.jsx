import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Write from '../pages/Write';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;