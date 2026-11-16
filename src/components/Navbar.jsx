import { useState } from "react";

import "./Navbar.css";

import france from "../assets/IMG/LANGUAGES/france.png";
import spain from "../assets/IMG/LANGUAGES/spain.png";
import uk from "../assets/IMG/LANGUAGES/uk.png";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";

const Navbar = ({ language, changeLanguage, activePage, setActivePage }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    closeMenu();
  };

  return (
    <nav className="nav">
      {/* Navbar Desktop */}

      <div className="nav-desktop">
        <button
          type="button"
          className="home-button"
          aria-label="Home"
          onClick={() => handlePageChange("landing")}
        >
          <AiOutlineHome aria-hidden="true" />
        </button>

        <ul className="nav-list">
          <li className="nav-item">
            <span
              className={`nav-link ${activePage === "who" ? "active" : ""}`}
              onClick={() => handlePageChange("who")}
              style={{ cursor: "pointer" }}
            >
              {texts["who-title"]}
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link ${activePage === "services" ? "active" : ""}`}
              onClick={() => handlePageChange("services")}
              style={{ cursor: "pointer" }}
            >
              {texts["services-title"]}
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link ${activePage === "training" ? "active" : ""}`}
              onClick={() => handlePageChange("training")}
              style={{ cursor: "pointer" }}
            >
              {texts["training-title"]}
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link ${activePage === "outreach" ? "active" : ""}`}
              onClick={() => handlePageChange("outreach")}
              style={{ cursor: "pointer" }}
            >
              {texts["outreach-title"]}
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link ${activePage === "contact" ? "active" : ""}`}
              onClick={() => handlePageChange("contact")}
              style={{ cursor: "pointer" }}
            >
              {texts["contact-title"]}
            </span>
          </li>
        </ul>

        <div className="nav-language">
          <img
            src={france}
            title="Français"
            alt="Français"
            className="flag"
            onClick={() => changeLanguage("french")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={spain}
            title="Español"
            alt="Español"
            className="flag"
            onClick={() => changeLanguage("spanish")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={uk}
            title="English"
            alt="English"
            className="flag"
            onClick={() => changeLanguage("english")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Navbar Mobile */}

      <div className="nav-mobile">
        <div className="burger-menu">
          <div className={`burger-icon-container ${isMenuOpen ? "open" : ""}`}>
            <HiOutlineXMark
              className={`burger-icon burger-icon-close ${
                isMenuOpen ? "" : "burger-icon-hidden"
              }`}
              onClick={toggleMenu}
            />
            <AiOutlineMenu
              className={`burger-icon burger-icon-open ${
                isMenuOpen ? "burger-icon-hidden" : ""
              }`}
              onClick={toggleMenu}
            />
          </div>
        </div>

        {isMenuOpen && (
          <Fade cascade damping={0.1}>
            <ul className="burger-open">
              <li className="burger-item">
                <button
                  type="button"
                  className="burger-link burger-home"
                  aria-label="Home"
                  onClick={() => handlePageChange("landing")}
                >
                  <AiOutlineHome aria-hidden="true" />
                </button>
              </li>

              <li className="burger-item">
                <button
                  type="button"
                  className="burger-link"
                  onClick={() => handlePageChange("who")}
                >
                  {texts["who-title"]}
                </button>
              </li>

              <li className="burger-item">
                <button
                  type="button"
                  className="burger-link"
                  onClick={() => handlePageChange("services")}
                >
                  {texts["services-title"]}
                </button>
              </li>

              <li className="burger-item">
                <button
                  type="button"
                  className="burger-link"
                  onClick={() => handlePageChange("training")}
                >
                  {texts["training-title"]}
                </button>
              </li>

              <li className="burger-item">
                <button
                  type="button"
                  className="burger-link"
                  onClick={() => handlePageChange("outreach")}
                >
                  {texts["outreach-title"]}
                </button>
              </li>

              <li className="burger-item">
                <button
                  type="button"
                  className="burger-link"
                  onClick={() => handlePageChange("contact")}
                >
                  {texts["contact-title"]}
                </button>
              </li>
            </ul>

            <div className="nav-language">
              <img
                src={france}
                title="Français"
                alt="Français"
                className="flag"
                onClick={() => {
                  changeLanguage("french");
                }}
              />
              <img
                src={spain}
                title="Español"
                alt="Español"
                className="flag"
                onClick={() => {
                  changeLanguage("spanish");
                }}
              />
              <img
                src={uk}
                title="English"
                alt="English"
                className="flag"
                onClick={() => {
                  changeLanguage("english");
                }}
              />
            </div>
          </Fade>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
