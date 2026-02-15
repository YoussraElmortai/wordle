export const getRandomWord = async () => {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5",
    );
    const [word] = await response.json();
    return word;
  } catch (e) {
    console.error("Error:", e);
    // if undif fallbacks words
    const fallbackWords = [
      "BYTE",
      "CYPH",
      "LOGIC",
      "ALIEN",
      "ROBOT",
      "NANOB",
      "CLONE",
      "SPACE",
      "LASER",
      "VIRUS",
    ];
    return fallbackWords[
      Math.floor(Math.random() * fallbackWords.length)
    ];
  }
};
