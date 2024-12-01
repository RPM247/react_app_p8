import React from "react";
import "./App.css";
import NavMenu from "./NavMenu";
import RegistrationForm from "./RegistrationForm";
import logo from "./logo1.png";

function App() {
  const handleLogoClick = () => {
    alert("Logo clicked!");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" onClick={handleLogoClick}
        />
      </header>
      <NavMenu />
      <br />
      <RegistrationForm />
    </div>
  );
}
export default App;