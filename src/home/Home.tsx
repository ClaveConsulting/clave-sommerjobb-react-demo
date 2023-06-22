import { Link } from "react-router-dom";

export function Home() {
  return (
    <ol>
      <li>
        <Link to="/1-syntax">Syntax</Link>
      </li>
      <li>
        <Link to="/2-props">Props</Link>
      </li>
      <li>
        <Link to="/3-hooks">Hooks</Link>
      </li>
      <li>
        <Link to="/4-context">Context</Link>
      </li>
      <li>
        <Link to="/5-reducer">Reducer</Link>
      </li>
      <li>
        <Link to="/6-styling">Styling</Link>
      </li>
      <li>
        <Link to="/">Routing</Link>
      </li>
      <li>
        <Link to="/8-fetching-data">Fetching data</Link>
      </li>
    </ol>
  );
}
