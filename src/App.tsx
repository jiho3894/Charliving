import React from "react";
import Router from "./Router/router";
import "tailwindcss/tailwind.css";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
