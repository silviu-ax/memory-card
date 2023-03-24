const GameCards = ({ characters, handleCardClick, images }) => {
  console.log(characters, images);
  return images.length === characters.length ? (
    characters.map((char, i) => (
      <div key={char.id} className="grid-item">
        <button
          type="button"
          onClick={() => handleCardClick(char)}
          onKeyUp={(e) => {
            if (e.key !== "Enter") return;
            handleCardClick(char);
          }}
        >
          <img
            src={images[i].src}
            width={images[i].width}
            alt={char.fullName}
          />
        </button>

        <p>{char.fullName}</p>
      </div>
    ))
  ) : (
    <div>loading</div>
  );
};

export default GameCards;
