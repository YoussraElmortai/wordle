import { useState } from "react";
import "./App.css";
// components
import Grid from "./components/Grid";
import Keyboard from "./components/keyboard";



function App() {
  const [guesses, setguesses] = useState([]);
  const handleKeyPress =() =>{};

  return (
    <div className='app'>
      <Grid guesses={guesses} />
      <Keyboard onKeyPress ={handleKeyPress} />
    </div>
  );
}

export default App;
