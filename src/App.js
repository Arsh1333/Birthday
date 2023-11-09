import BirthdayDisplay from "./components/BirthdayDisplay";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [date, setDate] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleDisplayButtonClick = (e) => {
    e.preventDefault();
    setDisplayedName(name);
    setDisplayDate(date);
  };

  return (
    <div className="App">
      <div className="main-content">
        <form className="inputs">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={handleDateChange}
          />
          <button type="submit" onClick={handleDisplayButtonClick}>
            Submit
          </button>
        </form>
      </div>
      <p>Birthdays:{displayedName}</p>
      <p>{displayDate}</p>
      {/*<p>{name}</p>*/}
    </div>
  );
}

export default App;
