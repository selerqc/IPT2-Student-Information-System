import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddStudent.css";
import Sidebar from "./Sidebar";
function AddStudent() {
  const [data, setData] = useState({
    idNumber: "",
    Firstname: "",
    Lastname: "",
    Middlename: "",
    course: "",
    year: "",
  });
  const submit = () => {
    const id = document.getElementById("idNumber").value;
    const fn = document.getElementById("fn").value;
    const ln = document.getElementById("ln").value;
    const mn = document.getElementById("mn").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    setData({
      idNumber: id,
      Firstname: fn,
      Lastname: ln,
      Middlename: mn,
      course: course,
      year: year,
    });
  };
  return (
    <>
      <div className="container">
        <div className="add-main">
          <h1>ADD STUDENT</h1>
          <TextField
            label="Id Number:"
            margin="normal"
            id="idNumber"></TextField>
          <TextField label=" Firstname:" margin="normal" id="fn"></TextField>
          <TextField label=" Lastname:" margin="normal" id="ln"></TextField>
          <TextField label=" Middlename:" margin="normal" id="mn"></TextField>
          <TextField label=" Course:" margin="normal" id="course"></TextField>
          <TextField label=" Year:" margin="normal" id="year"></TextField>
          <Button variant="contained" onClick={submit}>
            Add Student
          </Button>
        </div>
        <div className="information">
          <h1>Student Information</h1>
          <p>Id Number: {data.idNumber}</p>
          <p>Firstname: {data.Firstname}</p>
          <p>Lastname: {data.Lastname}</p>
          <p>Middlename: {data.Middlename}</p>
          <p>Course: {data.course}</p>
          <p>Year: {data.year}</p>
        </div>
      </div>

      <Sidebar />
    </>
  );
}

export default AddStudent;
