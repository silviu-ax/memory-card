import characters from "./characters";

const shuffle = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // eslint-disable-next-line no-param-reassign
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

const getCharacters = (numberOfChars, clickedChars, currentClickedChar) => {
  const getUnclicked = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 52);
    } while (clickedChars.includes(id) || currentClickedChar === id);
    return id;
  };

  const ids = [];
  if (currentClickedChar !== undefined) {
    ids.push(getUnclicked());
  }

  for (
    let i = currentClickedChar !== undefined ? 1 : 0;
    i < numberOfChars;
    i += 1
  ) {
    let id;
    do {
      id = Math.floor(Math.random() * 52);
    } while (ids.includes(id));

    ids.push(id);
  }
  const randomChars = ids.map((id) => characters[id]);

  return shuffle(randomChars);
};

export default getCharacters;
