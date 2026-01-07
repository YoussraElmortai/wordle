import "./Grid.css";

const rows = 6;
const cols = 5;
// cols are equal to the letters in the word

const Grid = ({ guesses }) => {
  const currentGuesses = guesses || Array(rows).fill("");

  return (
    <div className='grid'>
      {Array(rows)
        .fill()
        .map((_, rowIndex) => {
          return (
            <div key={rowIndex} className='row'>
              {Array(cols)
                .fill()
                .map((_, colIndex) => {
                  const letter =
                    currentGuesses[rowIndex]?.[colIndex];
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className='cell'
                    >
                      {letter}
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default Grid;
