import { useState } from "react";
import { Effect } from "./Effect";
import { Counter } from "./State";

export function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h2>State</h2>
        <Counter
          count={count}
          onIncrement={() => setCount((prev) => prev + 1)}
          onReset={() => setCount(0)}
        />
      </div>

      <hr />
      <code>Current count: {count}</code>
      <hr />
      
      <div>
        <h2>Effect</h2>
        <Effect />
      </div>
    </div>
  );
}
