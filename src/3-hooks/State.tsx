export function Counter({
  count,
  onIncrement,
  onReset,
}: {
  count: number;
  onIncrement(): void;
  onReset(): void;
}) {
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
