import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import PatientsRecord from "./PatientsRecord";

function App() {
  return (
    <div className="App">
      <h1> 🏥 Patients Details Recorder</h1>
      <PatientsRecord />
    </div>
  );
}

export default App;
