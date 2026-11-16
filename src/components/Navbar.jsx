import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import france from "../assets/IMG/LANGUAGES/france.png";
import spain from "../assets/IMG/LANGUAGES/spain.png";
import uk from "../assets/IMG/LANGUAGES/uk.png";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";

const Navbar = ({ language, changeLanguage }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }

    setIsMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isXMark, setIsXMark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsXMark(!isXMark);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsXMark(false);
  };

  return (
    <nav className="nav">
      {/* Navbar Desktop */}

      <div className="nav-desktop">
        <ul className="nav-list">
          {/*   TO GO BACK TO HOME        <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#principal"
              onClick={(e) => handleNavLinkClick(e, "principal")}
            >
              {texts["about-me"]}
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#who"
              onClick={(e) => handleNavLinkClick(e, "who")}
            >
              {texts["who"]}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#services"
              onClick={(e) => handleNavLinkClick(e, "services")}
            >
              {texts["services"]}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#contact"
              onClick={(e) => handleNavLinkClick(e, "contact")}
            >
              {texts["contact"]}
            </NavLink>
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
              {/*  TO GO BACK TO HOME                      <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#principal"
                  onClick={(e) => handleNavLinkClick(e, "principal", closeMenu)}
                >
                  {texts["about-me"]}
                </NavLink>
              </li> */}
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#who"
                  onClick={(e) =>
                    handleNavLinkClick(e, "who", closeMenu)
                  }
                >
                  {texts["who"]}
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#services"
                  onClick={(e) =>
                    handleNavLinkClick(e, "services", closeMenu)
                  }
                >
                  {texts["services"]}
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#contact"
                  onClick={(e) => handleNavLinkClick(e, "contact", closeMenu)}
                >
                  {texts["contact"]}
                </NavLink>
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
