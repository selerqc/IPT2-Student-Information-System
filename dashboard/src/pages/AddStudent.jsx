import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddStudent.css";
import Sidebar from "./Sidebar";

import axios from "axios";

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
    const newStudent = {
      idNumber: document.getElementById("idNumber").value,
      firstName: document.getElementById("fn").value,
      lastName: document.getElementById("ln").value,
      middleName: document.getElementById("mn").value,
      course: document.getElementById("course").value,
      year: document.getElementById("year").value,
    };

    setStudents([...students, newStudent]);
  };

  return (
    <>
      <div className="container">
        <div className="add-main">
          <h1>ADD STUDENT</h1>
          <TextField label="Id Number:" margin="normal" id="idNumber" />
          <TextField label=" Firstname:" margin="normal" id="fn" />
          <TextField label=" Lastname:" margin="normal" id="ln" />
          <TextField label=" Middlename:" margin="normal" id="mn" />
          <TextField label=" Course:" margin="normal" id="course" />
          <TextField label=" Year:" margin="normal" id="year" />
          <Button variant="contained" onClick={submit}>
            Add Student
          </Button>
        </div>
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
                {students.map((student) => (
                  <TableRow
                    key={student.idNumber}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {student.idNumber}
                    </TableCell>

                    <TableCell align="right">{student.firstName}</TableCell>
                    <TableCell align="right">{student.middleName}</TableCell>
                    <TableCell align="right">{student.lastName}</TableCell>
                    <TableCell align="right">{student.course}</TableCell>
                    <TableCell align="right">{student.year}</TableCell>
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
