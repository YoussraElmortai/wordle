export const getRandomWord = async () => {
  try {
    const [word] = await fetch();
    return word;
  } catch (e) {
    console.error("Error:", e);
  }
};
