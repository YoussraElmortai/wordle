import "./Keyboard.css";

const KEYBOARDS_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const Keyboard = ({ onKeyPress }) => {
  return (
    <div className='keyboard'>
      {KEYBOARDS_ROWS.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='keyboard-row'>
            {row.map((key) => {
              return (
                <button
                  className={`keyboard-key ${
                    key === "Backspace" || key === "Enter"
                      ? "keyboard-key-wide"
                      : ""
                  }`}
                >
                  {key === "Backspace" ? "⌫" : key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
