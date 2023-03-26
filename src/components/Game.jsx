import { useEffect, useState } from "react";
import getCharacters from "../utils/getCharacters";
import GameCards from "./GameCards";
import GameLoading from "./GameLoading";
import GameOver from "./GameOver";
import loadImages from "./utils/loadImages";

const difficultyMap = {
  easy: 4,
  medium: 6,
  hard: 10,
};

const Game = ({ difficulty, score, setScore, bestScore, setBestScore }) => {
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNewChars = (current) => {
    const newChars = getCharacters(
      difficultyMap[difficulty],
      clickedCharacters,
      current
    );
    const newUrls = newChars.map((char) => char.imageUrl);
    return [newChars, newUrls];
  };

  const handleReset = () => {
    setScore(0);
    setIsOver(false);
    setLoading(true);
    setClickedCharacters([]);
    setImages([]);
    const [newChars, newUrls] = getNewChars();
    loadImages(newUrls).then((imgs) => {
      setLoading(false);
      setImages(imgs);
      setCharacters(newChars);
    });
  };

  const handleCardClick = (character) => {
    if (clickedCharacters.includes(character.id)) {
      if (score > bestScore) setBestScore(score);
      setIsOver(true);
      setClickedCharacters([]);
      setCharacters(getCharacters(difficultyMap[difficulty]));
    } else {
      if (clickedCharacters.length === 51) {
        setIsOver(true);
        setClickedCharacters([...clickedCharacters].concat(character.id));
        setScore(score + 1);
        return;
      }
      const [newChars, newUrls] = getNewChars(character.id);
      setLoading(true);
      loadImages(newUrls).then((imgs) => {
        setClickedCharacters([...clickedCharacters].concat(character.id));
        setCharacters(newChars);
        setScore(score + 1);
        setImages(imgs);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    handleReset();
  }, [difficulty]);

  if (isOver)
    return (
      <GameOver
        handleResetClick={handleReset}
        win={clickedCharacters.length === 52}
      />
    );
  if (loading || difficultyMap[difficulty] !== images.length)
    return <GameLoading />;
  return (
    <div className={`card-grid ${difficulty}`}>
      <GameCards
        images={images}
        characters={characters}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default Game;
