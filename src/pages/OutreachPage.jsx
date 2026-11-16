import "./Pages.css";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const OutreachPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <section id="outreach" className="pages-sections">
      <h1 className="outreach-title">{texts["outreach-title"]}</h1>
      <h2 className="outreach-subtitle">{texts["outreach-subtitle"]}</h2>
      <div className="pages-text-container">
        <div className="outreach-text">
          {texts["outreach-text"].map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutreachPage;