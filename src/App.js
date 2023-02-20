import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <div>
        <h1>Build a Hero </h1>
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Hero Name"
        />{" "}
        <br />
        <label>Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
          placeholder="hero Age"
        ></input>
        <label>Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
          placeholder="hero height"
        ></input>{" "}
        <br></br>
        <label>SuperPower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperpower(event.target.value);
          }}
          placeholder=" power"
        ></input>{" "}
        <br></br>
      </div>
      <button
        onClick={() => {
          setDisplay(true);
        }}
      >
        Display Character
      </button>
      <div>
        <h3>Hero Info</h3>
        {display && (
          <ul className="ul">
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>SuperPower: {superpower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
