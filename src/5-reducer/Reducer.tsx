import { useReducer } from "react";
import { Redux } from "./Redux";

type Action =
  | { type: "add"; delta: number }
  | { type: "subtract"; delta: number };

function reducer(prev: number, action: Action) {
  switch (action.type) {
    case "add":
      return prev + action.delta;
    case "subtract":
      return prev - action.delta;
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
      <button onClick={() => dispatch({ type: "add", delta: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "subtract", delta: 10 })}>
        Decrement
      </button>
      <hr />
      <h2>Redux</h2>
      <Redux />
    </div>
  );
}
