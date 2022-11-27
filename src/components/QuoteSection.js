import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function QouteSection() {
  return (
    <div className="section quote">
      <p className="qoute-text">
        <FontAwesomeIcon icon={faQuoteLeft} /> Food brings people together on
        many different levels. It’s nourishment of the soul and body; it’s truly
        love.
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>
      <p className="qoute-auther">- Giada De Laurentiis</p>
    </div>
  );
}
