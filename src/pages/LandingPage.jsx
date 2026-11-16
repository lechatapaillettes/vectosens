import './Pages.css';

import logo from "../assets/IMG/logo.png";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const LandingPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <section id="landing" className="landing">
      <img src={logo} title="VectoSens" alt="VectoSens" className="logo-big" />
    </section>
  );
};

export default LandingPage;