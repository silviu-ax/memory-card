import { useEffect, useState } from "react";
import getCharacters from "../utils/getCharacters";
import GameCards from "./GameCards";
import GameOver from "./GameOver";

const difficultyMap = {
  easy: 4,
  medium: 6,
  hard: 10,
};

const Game = ({ difficulty, score, setScore, bestScore, setBestScore }) => {
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [isOver, setIsOver] = useState(false);

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
      const newChars = getCharacters(difficultyMap[difficulty]);
      setClickedCharacters([...clickedCharacters].concat(character.id));
      setCharacters(newChars);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    setScore(0);
    setCharacters(getCharacters(difficultyMap[difficulty]));
  }, [difficulty]);

  return isOver ? (
    <GameOver handleResetClick={handleResetClick} />
  ) : (
    <div className={`card-grid ${difficulty}`}>
      <GameCards characters={characters} handleCardClick={handleCardClick} />
    </div>
  );
};

export default Game;
