import React from "react";
import "./App.css";
import Dog from "./components/Dog";
import Header from "./Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Dog />
      </Container>
    </div>
  );
}

export default App;
