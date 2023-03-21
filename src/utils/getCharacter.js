import { characters } from "./characters";

const getCharacter = () => {
  const ids = [];
  for (let i = 0; i < 10; i += 1) {
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

export { getCharacter };
