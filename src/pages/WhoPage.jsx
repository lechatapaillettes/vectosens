import "./Pages.css";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const WhoPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <section id="who" className="pages-sections">
      <h1 className="who-title">{texts["who-title"]}</h1>
      <h2 className="who-subtitle">{texts["who-subtitle"]}</h2>
      <div className="pages-text-container">
        <div className="who-text">
          {texts["who-text"].map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoPage;