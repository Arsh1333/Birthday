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
    const currentDate = new Date();
    const inputDate = new Date(date);
    if (
      inputDate.getDate() === currentDate.getDate() &&
      inputDate.getMonth() === currentDate.getMonth()
    ) {
      alert(`Happy birthday ${name} 🎂`);
    }
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
      <div className="card">
        <p>Birthdays:{displayedName}</p>
        <p>{displayDate}</p>
      </div>

      {/*<p>{name}</p>*/}
    </div>
  );
}

export default App;
