const isUpperCase = (char: string) => /^[A-Z]*$/.test(char);
const isLowerCase = (char: string) => /^[a-z]*$/.test(char);

export const upperCase = (text: string) => text.toUpperCase();
export const lowerCase = (text: string) => text.toLocaleLowerCase();
export const sentenceCase = (text: string) =>
  upperCase(text[0]) + lowerCase(text.slice(1));
export const titleCase = (text: string) =>
  text
    .split(" ")
    .map((word) => sentenceCase(word))
    .join(" ");
export const alternateCase = (text: string) =>
  text
    .split("")
    .map((char, index) => (index % 2 === 0 ? lowerCase(char) : upperCase(char)))
    .join("");
export const inverseCase = (text: string) =>
  text
    .split("")
    .map((char) =>
      isUpperCase(char)
        ? lowerCase(char)
        : isLowerCase(char)
        ? upperCase(char)
        : char
    )
    .join("");
