import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddStudent.css";
import Sidebar from "./Sidebar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function AddStudent() {
  const [students, setStudents] = useState([]);
  const submit = () => {
    const id = document.getElementById("idNumber").value;
    const fn = document.getElementById("fn").value;
    const ln = document.getElementById("ln").value;
    const mn = document.getElementById("mn").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    if (
      id === "" ||
      fn === "" ||
      ln === "" ||
      mn === "" ||
      course === "" ||
      year === ""
    ) {
      alert("Please fill out the form");
      return;
    }
    handleInput();
  };

  const handleInput = () => {
    const id = document.getElementById("idNumber").value;
    const fn = document.getElementById("fn").value;
    const ln = document.getElementById("ln").value;
    const mn = document.getElementById("mn").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    setStudents([
      ...students,
      {
        idNumber: id,
        Firstname: fn,
        Lastname: ln,
        Middlename: mn,
        course: course,
        year: year,
      },
    ]);
    document.getElementById("idNumber").value = "";
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("mn").value = "";
    document.getElementById("course").value = "";
    document.getElementById("year").value = "";
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
        {/* <div className="information">
          <h1>Student Information</h1>
          <p>Id Number: {data.idNumber}</p>
          <p>Firstname: {data.Firstname}</p>
          <p>Lastname: {data.Lastname}</p>
          <p>Middlename: {data.Middlename}</p>
          <p>Course: {data.course}</p>
          <p>Year: {data.year}</p>
        </div> */}
        {/* <div className="information">
          <ul
            style={{
              padding: "10px",
            }}>
            {students.map((students, index) => (
              <li
                key={index}
                style={{
                  listStyleType: "none",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}>
                <p> Id Number: {students.idNumber}</p>
                <p>First Name: {students.Firstname}</p>
                <p>Middle Name: {students.Middlename}</p>
                <p>Last Name: {students.Lastname}</p>
                <p> Course : {students.course}</p>
                <p> Year: {students.year}</p>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="information">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id Number</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Middle Name&nbsp;</TableCell>
                  <TableCell align="right">Last Name&nbsp;</TableCell>
                  <TableCell align="right">Course&nbsp;</TableCell>
                  <TableCell align="right">Year&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((students) => (
                  <TableRow
                    key={students.idNumber}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {students.idNumber}
                    </TableCell>

                    <TableCell align="right">{students.Firstname}</TableCell>
                    <TableCell align="right">{students.Middlename}</TableCell>
                    <TableCell align="right">{students.Lastname}</TableCell>
                    <TableCell align="right">{students.course}</TableCell>
                    <TableCell align="right">{students.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Sidebar />
    </>
  );
}

export default AddStudent;
