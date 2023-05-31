import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Scenes from "../components/Scenes.jsx";
import Scene from "../components/Scene";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Scenes />} />
      <Route path="/scenes" element={<Scenes />} />
      <Route path="scenes/:id" element={<Scene/>}/>
    </Routes>
  </Router>
);