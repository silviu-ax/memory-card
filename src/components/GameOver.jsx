const GameOver = ({ handleResetClick, win }) => (
  <div>
    <p>Game over. {win ? "You won" : "You lost"}</p>
    <button type="button" onClick={handleResetClick}>
      restart
    </button>
  </div>
);
export default GameOver;
