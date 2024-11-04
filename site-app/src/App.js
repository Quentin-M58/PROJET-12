import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './Style/mains.scss';
import Layout from "./Containers/Layout.js"
import Home from "./Pages/Home.js"
import Presentation from "./Pages/Presentation.js";
import Works from "./Pages/Works.js";
import Competences from "./Pages/Competences.js";
import Formations from "./Pages/Formations.js";
import Pagework from "./Pages/Pagework.js";
import Contact from "./Pages/Contact.js";
import Imgpc from "./Pages/Imgpc.js";
import Imgtel from "./Pages/Imgtel.js";
import Terms from "./Pages/Terms.js";
import Erreur from "./Pages/Erreur.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/acceuil/presentation" element={<Presentation />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:workname" element={<Pagework />} />
          <Route path="/works/img/pc/:workname" element={<Imgpc />} />
          <Route path="/works/img/tel/:workname" element={<Imgtel />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/404" element={<Erreur />} />
          <Route path="*" element={<Erreur />} />
        </Route>
      </Routes>
    </BrowserRouter  >
  )
}