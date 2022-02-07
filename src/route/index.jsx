import React from 'react';
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import { Routes, Route, Link } from "react-router-dom";

export default function AppRouter() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}