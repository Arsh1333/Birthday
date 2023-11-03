import BirthdayDisplay from "./components/BirthdayDisplay";
import { useState } from "react";
import "./App.css";

function App() {
  const [birthday, setBirthDay] = useState(" ");
  const btnHandler = () => {
    console.log("clicked");
    setBirthDay(<BirthdayDisplay></BirthdayDisplay>);
  };
  return (
    <div className="App">
      <div className="main-content">
        <div className="inputs">
          <input palceholder="Enter Name" type="text"></input>
          <input palceholder="Enter DOB" type="date"></input>
        </div>
        <button className="btn" onClick={btnHandler}>
          Submit
        </button>
      </div>
      <div className="birthday-wish">{birthday}</div>
    </div>
  );
}

export default App;
