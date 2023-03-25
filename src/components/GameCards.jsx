const GameCards = ({ characters, handleCardClick, images }) =>
  characters.map((char, i) => (
    <div
      key={char.id}
      className="grid-item"
      role="button"
      tabIndex="0"
      onClick={() => handleCardClick(char)}
      onKeyUp={(e) => {
        if (e.key !== "Enter") return;
        handleCardClick(char);
      }}
    >
      <img
        draggable="false"
        src={char.imageUrl}
        alt={char.fullName}
        style={{
          objectPosition:
            images[i].src.match(/brienne|sansa/) !== null ? "0 0" : "center",
        }}
      />

      <p>{char.fullName}</p>
    </div>
  ));

export default GameCards;
