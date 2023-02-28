import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [solution, issolution] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomsol = json[Math.floor(Math.random() * json.length)];
        issolution(randomsol.word);
        console.log("RANDOM WORD🔥:" + randomsol.word);
      });
  }, [issolution]);

  return (
    <div className="App">
      <h2>Wordle by Pri</h2>
      <div> {solution && <div>Solution is: {solution}</div>} </div>
    </div>
  );
}

export default App;
