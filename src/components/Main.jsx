import { useState } from "react";
import Score from "./Score";
import Difficulty from "./Difficulty";
import Game from "./Game";

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <main>
      <Score score={score} bestScore={bestScore} />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <Game
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        difficulty={difficulty}
      />
    </main>
  );
};

export default Main;
