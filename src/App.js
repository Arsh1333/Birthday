import BirthdayDisplay from "./components/BirthdayDisplay";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === " ") {
      <BirthdayDisplay></BirthdayDisplay>;
    } else {
      alert(`Name: ${name}, Birthday: ${birthday}`);
    }
  };
  return (
    <div className="App">
      <div className="main-content">
        <form onSubmit={handleSubmit} className="inputs">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
