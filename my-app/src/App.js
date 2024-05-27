import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [mode, setMode] = useState("light"); // dark mode enabled or not

  const[alert , setAlert] = useState(null);
  // fun to help  with setting up alerts for user feedback
  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b0a14";
      showAlert('Dark mode has been enabled','success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled','success')
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyse below:" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
