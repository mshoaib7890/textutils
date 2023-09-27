import React, { useState } from "react";
import "./App.css";
import About from "./Component/About";
import Alert from "./Component/Alert";
import Form from "./Component/Form";
import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState("light");
  const [alert,setAlert]= useState(null);
  const togglealert=(message,type)=>{
    setAlert({
      msg: message,
      typ:type 
    })
    setTimeout(() => {
       setAlert(null);
    }, 1500);
}
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042473";
      togglealert('Dark mode has been enable','success');
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      togglealert('Light mode has been enable','success');
    }
  };
 
  return (
    <>
     <Router>
      <Navbar titleName="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} togglealert={togglealert}/>
      <div className="container my-3">

       <Routes>
          <Route exact path="/about" element={<About />} />
  
          <Route exact nppath="/" element={<Form texts="Analyze Of Text" mode={mode} togglealert={togglealert} />}/>
          </Routes>
      </div>  
      </Router>
    </>
  );
}

export default App;
