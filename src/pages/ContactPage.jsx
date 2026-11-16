import "./Pages.css";

import french from "../texts/french.json";
import spanish from "../texts/spanish.json";
import english from "../texts/english.json";

const ContactPage = ({ language }) => {
  const texts = {
    french,
    spanish,
    english,
  }[language];

  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">{texts["contact-title"]}</h1>
    </section>
  );
};

export default ContactPage;