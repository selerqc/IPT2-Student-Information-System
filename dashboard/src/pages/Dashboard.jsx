import { React, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Dashboard() {
  const [color, setColor] = useState("red");
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <h1>Welcome to Saint Mary's University</h1>
      <div className="header">
        <h2>
          My fav color is <span style={{ color: color }}>{color}</span>
        </h2>
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={() => setColor(color === "red" ? "blue" : "red")}>
          {color}
        </Button>
        <p>My name is:{firstName}</p>
        <TextField
          label="First Name"
          margin="normal"
          id="fn"
          variant="outlined"></TextField>
        <br />
        <br />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={() => {
            setFirstName(document.getElementById("fn").value);
          }}>
          Submit
        </Button>
      </div>

      <Sidebar />
    </div>
  );
}

export default Dashboard;
