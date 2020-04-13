import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

function App() {
  const user = { age: 55, name: "bill", gender: "male", location: "arizona" };
  return (
    <div className="App">
      <Login {...user} />
    </div>
  );
}

export default App;
