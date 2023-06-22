import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./home/Home";
import { Syntax } from "./1-syntax/Syntax";
import { Props } from "./2-props/Props";
import { Hooks } from "./3-hooks/Hooks";
import { ClaveContext } from "./4-context/ClaveContext";
import { Reducer } from "./5-reducer/Reducer";
import { Styling } from "./6-styling/Styling";
import { FetchingData } from "./8-fetching-data/FetchingData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path="/1-syntax" Component={Syntax} />
        <Route path="/2-props" Component={Props} />
        <Route path="/3-hooks" Component={Hooks} />
        <Route path="/4-context" Component={ClaveContext} />
        <Route path="/5-reducer" Component={Reducer} />
        <Route path="/6-styling" Component={Styling} />
        <Route path="/8-fetching-data" Component={FetchingData} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
