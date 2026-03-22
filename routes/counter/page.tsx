import { useState } from "preact/hooks";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>
        <a href="/">Back home</a>
      </p>
    </div>
  );
}
