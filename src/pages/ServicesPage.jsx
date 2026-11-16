import "./Pages.css";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const ServicesPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <section id="services" className="pages-sections">
      <h1 className="services-title">{texts["services-title"]}</h1>
      <h2 className="services-subtitle">{texts["services-subtitle"]}</h2>
      <div className="pages-text-container">
        <div className="services-text">
          {texts["services-text"].map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
