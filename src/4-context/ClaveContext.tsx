import { ReactNode, createContext, useContext, useState } from "react";

export function ClaveContext() {
  return (
    <div>
      <Provider>
        Parent counter: <Consumer />
        <hr />
        <Provider>
          Child counter: <Consumer />
        </Provider>
      </Provider>
    </div>
  );
}

interface ICounterContext {
  value: number;  
  onAdd(): void;
}
const CounterContext = createContext<ICounterContext | null>(null);

function Provider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(0);

  function onAdd() {
    setValue((prev) => prev + 1);
  }

  return (
    <CounterContext.Provider value={{ value, onAdd }}>
      {children}
    </CounterContext.Provider>
  );
}

function Consumer() {
  const context = useContext(CounterContext);
  if (!context) throw new Error("No CounterContext found!");
  const { value, onAdd } = context;

  return (
    <div>
      <p>
        Value: <code>{value}</code>
      </p>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
