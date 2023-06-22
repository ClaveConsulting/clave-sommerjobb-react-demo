import "./using-class-names.css";
import classes from "./imported-classes.module.css";
import { useState } from "react";

export function Styling() {
  return (
    <div>
      <h2>Class-based styling</h2>
      <ClassBasedStyling />
      <hr />
      <h2>CSS import styling</h2>
      <CssModuleStyling />
      <hr />
      <h2>CSS-in-JS</h2>
      <CssInJsStyling />
    </div>
  );
}

function ClassBasedStyling() {
  return <p className="my-class">Red text</p>;
}

function CssModuleStyling() {
  return <p className={classes.otherClass}>Green text</p>;
}

function CssInJsStyling() {
  const [color, setColor] = useState("blue");
  const css = { color: color, "&:hover": { color: "cyan" } };
  return (
    <div>
      <p css={css}>Blue text</p>
      <button onClick={() => setColor("red")}>Make it red</button>
    </div>
  );
}
