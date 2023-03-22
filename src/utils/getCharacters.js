import characters from "./characters";

const getCharacters = (numberOfChars) => {
  const ids = [];
  for (let i = 0; i < numberOfChars; i += 1) {
    let id;
    do {
      id = Math.floor(Math.random() * 53);
    } while (ids.includes(id));

    ids.push(id);
  }
  const randomChars = ids.map((id) => characters[id]);

  return randomChars;
};

export default getCharacters;
