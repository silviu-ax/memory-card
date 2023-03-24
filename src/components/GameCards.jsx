const GameCards = ({ characters, handleCardClick, images }) => {
  console.log(characters, images);
  return images.length === characters.length ? (
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
          src={images[i].src}
          style={{
            objectPosition:
              images[i].src.match(/brienne|sansa/) !== null ? "0 0" : "center",
          }}
          width={images[i].width}
          alt={char.fullName}
        />

        <p>{char.fullName}</p>
      </div>
    ))
  ) : (
    <div>loading</div>
  );
};

export default GameCards;
