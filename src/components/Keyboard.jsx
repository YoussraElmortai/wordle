import { useEffect } from "react";
import "./Keyboard.css";

const KEYBOARDS_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const Keyboard = ({ isGameOver, keyboardStates, onKeyPress }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isGameOver) {
        const key = event.key;

        if (
          key === "Backspace" ||
          key === "Enter" ||
          /^[a-z]$/.test(key.toLowerCase())
        ) {
          event.preventDefault();
          onKeyPress(key.toUpperCase());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGameOver, onKeyPress]);

  const handleClick = (key) => {
    if (!isGameOver) {
      if (key === "Enter") {
        onKeyPress("ENTER");
      } else if (key === "Backspace") {
        onKeyPress("BACKSPACE");
      } else {
        onKeyPress(key.toUpperCase());
      }
    }
  };

  return (
    <section className='keyboard'>
      {KEYBOARDS_ROWS.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='keyboard-row'>
            {row.map((key) => {
              const state =
                key.length === 1
                  ? keyboardStates[key.toLocaleLowerCase()]
                  : "";
              return (
                <button
                  key={key}
                  onClick={() => handleClick(key)}
                  className={`keyboard-key ${
                    key === "Backspace" || key === "Enter"
                      ? "keyboard-key-wide"
                      : ""
                  }${state}`}
                >
                  {key === "Backspace" ? "⌫" : key}
                </button>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Keyboard;
