import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { About } from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
    </>
  );
};

export default App;
