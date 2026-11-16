import "./Pages.css";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const TrainingPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <section id="training" className="pages-sections">
      <h1 className="training-title">{texts["training-title"]}</h1>
      <h2 className="training-subtitle">{texts["training-subtitle"]}</h2>
      <div className="pages-text-container">
        <div className="training-text">
          {texts["training-text"].map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPage;