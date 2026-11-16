import "./Footer.css";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const Footer = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <footer>
      <div className="copyright">
        <p>
          © 2026 VectoSens. {texts["copyright"]}<br></br>{texts["developedBy"]}{" "}
          <a
            href="https://luciapetit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            L. Petit
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
