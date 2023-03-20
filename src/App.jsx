import { useState } from "react";

import "./App.scss";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>React Calculator</h1>
        <p>
          A small React.js app I built to practice useState. App created with
          Vite & with the help of Scss.
        </p>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
