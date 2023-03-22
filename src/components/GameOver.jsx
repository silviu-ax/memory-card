const GameOver = ({ handleResetClick }) => (
  <div>
    <p>game over</p>
    <button type="button" onClick={handleResetClick}>
      restart
    </button>
  </div>
);
export default GameOver;
