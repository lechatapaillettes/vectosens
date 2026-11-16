import { NavLink } from "react-router-dom";

import './NotFoundPage.css';

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const NotFoundPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-txt">
            <h1 className="not-found-title">404</h1>
            <br />
            <p>{texts["not-found-txt"]}</p>
          </div>
        </div>

        <div className="back">
          <NavLink to="/" className="back-link">
            {texts["back-to-main"]}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
