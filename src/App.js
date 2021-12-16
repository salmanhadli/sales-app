import * as React from "react";
import "./App.css";
import Content from "./Containers/Content";
import NavBar from "./Containers/NavBar";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}
