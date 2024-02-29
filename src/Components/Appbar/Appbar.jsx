import React from "react";
import logo from "/src/assets/Logo.png";
import "/src/index.css";

function Appbar() {
  return (
    <div className="app-bar">
      <img src={logo} className="logo" alt="Logo" style={{ height: "70px" }} />
      <h2 className="Title" style={{ fontWeight: "bold" }}>
       OWARCH - THE ECCLESIA
      </h2>
      <button onClick={() => alert("For Admins Login")}>Admin Login</button>
    </div>
  );
}

export default Appbar;
