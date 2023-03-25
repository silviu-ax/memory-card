import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import loadImages from "./utils/loadImages";

const GameCards = ({ characters, handleCardClick }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const urls = characters.map((char) => char.imageUrl);
    loadImages(urls).then((imgs) => setImages(imgs));
  }, [characters]);

  return images.length === characters.length ? (
    characters.map((char, i) => (
      <div
        key={char.id}
        className="grid-item"
        role="button"
        tabIndex="0"
        onClick={() => handleCardClick(char)}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          handleCardClick(char);
        }}
      >
        <img
          draggable="false"
          src={images[i].src}
          style={{
            objectPosition:
              images[i].src.match(/brienne|sansa/) !== null ? "0 0" : "center",
          }}
          width={images[i].width}
          alt={char.fullName}
        />

        <p>{char.fullName}</p>
      </div>
    ))
  ) : (
    <FontAwesomeIcon
      icon={faSpinner}
      spinPulse
      style={{
        "--fa-primary-color": "#d9d9d9",
        "--fa-secondary-color": "#d9d9d9",
        fontSize: "3rem",
      }}
    />
  );
};

export default GameCards;
