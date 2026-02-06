import { useEffect, useState } from "react";
// components
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { getKeyboardStates } from "./utils";
import { getRandomWord } from "./randomword";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [solution, setSolution] = useState("");

  useEffect(() => {
    const getSolution = async () => {
      const newSolution = await getRandomWord();
      setSolution(newSolution);
    };

    getSolution();
  }, []);

  const handleKeyPress = (key) => {
    if (guesses.length === 6) {
      return;
    }

    if (key === "ENTER") {
      if (currentGuess.length === 5) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (currentGuess.length < 5 && key.length === 1) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }
  };

  const keyboardStates = getKeyboardStates(guesses, solution);

  return (
    <div className='app'>
      <h1>Wordle</h1>
      <Grid
        guesses={guesses}
        currentGuess={currentGuess}
        solution={solution}
      />
      <Keyboard
        onKeyPress={handleKeyPress}
        keyboardStates={keyboardStates}
      />
    </div>
  );
}

export default App;
