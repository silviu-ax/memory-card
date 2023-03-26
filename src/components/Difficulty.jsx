import { useState } from "react";

const Difficulty = ({ difficulty, setDifficulty }) => {
  const [selecting, setSelecting] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") return;
    setDifficulty(e.target.value);
    setSelecting(!selecting);
  };

  return selecting ? (
    // disabled linter rules because event is only for catching bubbled events
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="dif-btn-wrapper" onClick={handleClick}>
      <button className="difficulty" type="button" value="easy">
        Easy
      </button>
      <button className="difficulty" type="button" value="medium">
        Medium
      </button>
      <button className="difficulty" type="button" value="hard">
        Hard
      </button>
    </div>
  ) : (
    <button
      className="difficulty"
      type="button"
      onClick={() => setSelecting(!selecting)}
    >
      Difficulty: {difficulty.toUpperCase()}
    </button>
  );
};

export default Difficulty;
