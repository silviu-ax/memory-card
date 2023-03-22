import { useEffect, useState } from "react";
import getCharacters from "../utils/getCharacters";
import GameCard from "./GameCard";
import GameOver from "./GameOver";

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

  const handleCardClick = (character) => {
    if (clickedCharacters.includes(character.id)) {
      if (score > bestScore) setBestScore(score);
      setIsOver(true);
    } else {
      setClickedCharacters([...clickedCharacters].concat(character.id));
      setScore(score + 1);
    }
  };

  useEffect(() => {
    setCharacters(getCharacters(difficultyMap[difficulty]));
  }, [clickedCharacters]);

  useEffect(() => {
    setScore(0);
    setCharacters(getCharacters(difficultyMap[difficulty]));
  }, [difficulty]);

  return isOver ? (
    <GameOver />
  ) : (
    <div className="card-wrapper">
      {characters.map((character) => (
        <GameCard
          key={character.id}
          handleCardClick={handleCardClick}
          character={character}
        />
      ))}
    </div>
  );
};

export default Game;
