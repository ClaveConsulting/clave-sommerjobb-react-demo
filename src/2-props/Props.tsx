import { ReactNode } from "react";

export function Props() {
  function onClick() {
    alert("What do you want?");
  }
  return (
    <div>
      <h1>Props</h1>
      <button onClick={onClick}>Click me</button>
      <Wrapper title="Wallet">
        <ChildComponent value={10} message="Your wallet has this many moneys" />
      </Wrapper>
    </div>
  );
}

interface ChildComponentProps {
  value?: number;
  message: string;
}

function ChildComponent(props: ChildComponentProps) {
  const { value, message } = props;
  return (
    <div>
      <strong>
        {message}: {value}
      </strong>
    </div>
  );
}

function Wrapper({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
