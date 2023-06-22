import { useReducer } from "react";
import { Redux } from "./Redux";

type Action = "add" | "subtract";

function reducer(prev: number, action: Action) {
  switch (action) {
    case "add":
      return prev + 1;
    case "subtract":
      return prev - 1;
  }
}

export function Reducer() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Native</h2>
      <p>
        Current count: <code>{state}</code>
      </p>
      <button onClick={() => dispatch("add")}>Increment</button>
      <button onClick={() => dispatch("subtract")}>Decrement</button>
      <hr />
      <h2>Redux</h2>
      <Redux />
    </div>
  );
}
