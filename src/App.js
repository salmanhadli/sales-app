import * as React from "react";
import "./App.css";
import Content from "./Containers/Content";
import NavBar from "./Containers/NavBar";
import Models from "./Components/Models";


export default function App() {
  const [page, setPage] = React.useState(<Models />);
  return (
    <>
      <NavBar setPage={setPage} />
      <Content>{page}</Content>
    </>
  );
}
