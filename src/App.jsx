import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFoundPage";

import LandingPage from "./pages/LandingPage";
import WhoPage from "./pages/WhoPage";
import ServicesPage from "./pages/ServicesPage";
import TrainingPage from "./pages/TrainingPage";
import OutreachPage from "./pages/OutreachPage";
import ContactPage from "./pages/ContactPage"; 
 
import Footer from "./components/Footer";

import french from "./texts/french.json";
import spanish from "./texts/spanish.json";
import english from "./texts/english.json";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("french");

  const [activePage, setActivePage] = useState("landing");

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
        <Navbar
          language={language}
          changeLanguage={changeLanguage}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {activePage === "landing" && (
                    <LandingPage language={language} />
                  )}
                  {activePage === "who" && <WhoPage language={language} />}
                  {activePage === "services" && (
                    <ServicesPage language={language} />
                  )}
                  {activePage === "training" && (
                    <TrainingPage language={language} />
                  )}
                  {activePage === "outreach" && (
                    <OutreachPage language={language} />
                  )}
                  {activePage === "contact" && (
                    <ContactPage language={language} />
                  )}
                </>
              }
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
