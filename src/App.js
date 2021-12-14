import * as React from "react";
import "./App.css";
import Content from "./Containers/Content";
import NavBar from "./Containers/NavBar";
import Models from "./Pages/Models";
import "./App.css";

export default function App() {
  const [page, setPage] = React.useState(<Models />);
  return (
    <div className="App">
      <NavBar setPage={setPage} />
      <Content>{page}</Content>
    </div>
  );
}
