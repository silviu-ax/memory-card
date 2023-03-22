import characters from "./characters";

const getCharacters = (numberOfChars) => {
  const ids = [];
  for (let i = 0; i < numberOfChars; i += 1) {
    const id = Math.floor(Math.random() * 53);
    if (ids.includes(id)) {
      i -= 1;
      continue;
    }
    ids.push(id);
  }
  const randomChars = ids.map((id) => characters[id]);

  return randomChars;
};

export default getCharacters;
