const GameOver = ({ handleResetClick, win }) => (
  <div className="game-over">
    <p>Game over. {win ? "You won." : "You lost."}</p>
    <button id="restart" type="button" onClick={handleResetClick}>
      Restart
    </button>
  </div>
);
export default GameOver;
