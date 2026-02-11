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
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const getSolution = async () => {
      const newSolution = await getRandomWord();
      setSolution(newSolution);
    };

    getSolution();
  }, []);

  console.log(solution);

  const handleKeyPress = (key) => {
    if (guesses.length === 6) {
      return;
    }

    if (key === "ENTER") {
      if (currentGuess.length === 5) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");

        if (currentGuess === solution) {
          setTimeout(() => {
            alert(`you won the word was ${solution}`);
          }, 1000);
          setIsGameOver(true);
        } else if (guesses.length === 5) {
          setTimeout(() => {
            alert(`you lost the word was ${solution}`);
          }, 1000);
          setIsGameOver(true);
        }

        // if (currentGuess === "cunty") {
        //   alert("you won");
        // }
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
        isGameOver={isGameOver}
        onKeyPress={handleKeyPress}
        keyboardStates={keyboardStates}
      />
    </div>
  );
}

export default App;
