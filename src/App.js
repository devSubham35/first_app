import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert1, setAlert] = useState(null);

  const show = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => { setAlert(null) }, 1000)

  }


  const toggle_mode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#34363b";
      document.body.style.color = "white";
      show("Dark mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#34363b";
      show("Light mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/home" element={<div className="container my-2"><Textform mode={mode} show={show} /></div>}></Route>
        </Routes>
      </Router> */}

      <Navbar mode={mode} toggle_mode={toggle_mode} />
      <Alert alert={alert1} />
      <div className="container my-2">
        <Textform mode={mode} show={show} />
      </div>
    </>
  );
}

export default App;













