import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

import french from "./texts/french.json";
import spanish from "./texts/spanish.json";
import english from "./texts/english.json";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("french");

  const texts = {
    french,
    spanish,
    english,
  }[language];

  useEffect(() => {
    document.title = texts["page-title"];
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="app-container">
        <Navbar language={language} changeLanguage={changeLanguage} />

        <div className="main-content">
          <Routes>
            {/* Landing page */}

            <Route
              exact
              path="/"
              element={<LandingPage language={language} />}
            />

            {/* 404 */}

            <Route path="*" element={<NotFound language={language} />} />
          </Routes>
        </div>

        <Footer language={language} />
      </div>
    </>
  );
}

export default App;
