import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
