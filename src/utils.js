import { adjectives, nouns } from "./words";

export const secretGenerator = () => {
  Math.floor(Math.random() * adjectives.length);
};
