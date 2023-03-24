import { useEffect, useState } from "react";
import getCharacters from "../utils/getCharacters";
import GameCards from "./GameCards";
import GameOver from "./GameOver";
import loadImages from "./utils/loadImages";

const difficultyMap = {
  easy: 4,
  medium: 6,
  hard: 10,
};

const Game = ({ difficulty, score, setScore, bestScore, setBestScore }) => {
  const [characters, setCharacters] = useState(
    getCharacters(difficultyMap[difficulty])
  );
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [images, setImages] = useState([]);

  const handleResetClick = () => {
    setScore(0);
    setIsOver(false);
  };

  const handleCardClick = (character) => {
    if (clickedCharacters.includes(character.id)) {
      if (score > bestScore) setBestScore(score);
      setIsOver(true);
      setClickedCharacters([]);
      setCharacters(getCharacters(difficultyMap[difficulty]));
    } else {
      setClickedCharacters([...clickedCharacters].concat(character.id));
      setScore(score + 1);
    }
  };

  useEffect(() => {
    const urls = characters.map((char) => char.imageUrl);
    loadImages(urls).then((imgs) => setImages(imgs));
  }, [characters]);

  useEffect(() => {
    setCharacters(getCharacters(difficultyMap[difficulty]));
  }, [clickedCharacters]);

  useEffect(() => {
    setScore(0);
    setCharacters(getCharacters(difficultyMap[difficulty]));
  }, [difficulty]);

  return isOver ? (
    <GameOver handleResetClick={handleResetClick} />
  ) : (
    <div className={`card-grid ${difficulty}`}>
      <GameCards
        characters={characters}
        images={images}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default Game;
