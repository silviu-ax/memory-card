const GameCard = ({ character, handleCardClick }) => (
  <div onClick={() => handleCardClick(character)}>{character.fullName}</div>
);
export default GameCard;
