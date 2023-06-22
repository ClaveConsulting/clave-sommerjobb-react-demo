import "./using-class-names.css";
import classes from "./imported-classes.module.css";

export function Styling() {
  return (
    <div>
      <h2>Class-based styling</h2>
      <ClassBasedStyling />
      <hr />
      <h2>CSS import styling</h2>
      <CssImportStyling />
      <hr />
      <h2>CSS-in-JS</h2>
      <CssInJsStyling />
    </div>
  );
}

function ClassBasedStyling() {
  return <p className="my-class">Red text</p>;
}

function CssImportStyling() {
  return <p className={classes.otherClass}>Green text</p>;
}

function CssInJsStyling() {
  return <p css={{ color: "blue", "&:hover": { color: "cyan" } }}>Blue text</p>;
}
