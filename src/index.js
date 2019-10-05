import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Calendar from "./calendar";
// import Calendar from "react-calendar/dist/entry.nostyle";

function App() {
  return (
    <div className="App">
      <Calendar
        showNeighboringMonth={false}
        locale={"hu"}
        value={new Date()}
        onChange={console.log}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
