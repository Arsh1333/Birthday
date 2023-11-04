import BirthdayDisplay from "./components/BirthdayDisplay";
import { useState } from "react";
import "./App.css";

function App() {
  const [birthday, setBirthDay] = useState(" ");
  const [name, setName] = useState(" ");
  const btnHandler = (e) => {
    if (name == " ") {
      setBirthDay(<BirthdayDisplay></BirthdayDisplay>);
    } else {
      setName(e.target.value);
    }
    console.log("clicked");
  };
  return (
    <div className="App">
      <div className="main-content">
        <form className="inputs">
          <input
            palceholder="Enter Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input palceholder="Enter DOB" type="date"></input>
        </form>
        <button className="btn" onClick={btnHandler}>
          Submit
        </button>
      </div>
      <div className="side-content">
        <div className="birthday-wish">{birthday}</div>
      </div>
    </div>
  );
}

export default App;
