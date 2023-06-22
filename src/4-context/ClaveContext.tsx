import { ReactNode, createContext, useContext, useState } from "react";

export function ClaveContext() {
  return (
    <div>
      <Consumer />
      <StateKeeper>
        Parent counter: <Consumer />
        <hr />
        <StateKeeper>
          Child counter: <Consumer />
        </StateKeeper>
      </StateKeeper>
    </div>
  );
}

interface ICounterContext {
  value: number;
  onAdd(): void;
  onReset(): void;
}

const CounterContext = createContext<ICounterContext | null>(null);

function StateKeeper({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(0);

  function onAdd() {
    setValue((prev) => prev + 1);
  }

  return (
    <CounterContext.Provider
      value={{ value, onAdd, onReset: () => setValue(0) }}
    >
      {children}
    </CounterContext.Provider>
  );
}

function Consumer() {
  const context = useContext(CounterContext);
  if (!context) throw new Error("No CounterContext found");
  const { value, onAdd, onReset } = context;

  return (
    <div>
      <p>
        Value: <code>{value}</code>
      </p>
      <button onClick={onAdd}>Add</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
