import * as React from "react";
import "./App.css";
import Content from "./Containers/Content";
import NavBar from "./Containers/NavBar";

export default function App() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <NavBar setValue={setValue} />
      <Content value={value} setValue={setValue} />
    </>
  );
}
