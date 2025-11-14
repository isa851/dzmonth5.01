import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 30) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <div className="clicker">
      <h2 className="name">Count: </h2>
      <h1 className="count">{count}</h1>
      <div className="btns-content">
        <button className="increment" onClick={increment}>
          +1
        </button>
        <button className="decrement" onClick={decrement}>
          -1
        </button>
      </div>
    </div>
  );
}

export default App;