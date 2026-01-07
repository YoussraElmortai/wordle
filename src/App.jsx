import { useState } from "react";
import "./App.css";

function App() {
  const [guesses, setguesses] = useState([]);

  return (
    <div className='app'>
      <Grid />{" "}
    </div>
  );
}

export default App;
