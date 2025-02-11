const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
require("dotenv").config();
const mongoose = require("mongoose");

// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "Default",
//     message: "Hello worlds",
//   });
// });

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("database connection success");
  })
  .catch(() => {
    console.log("connection failed");
  });

require("./model/student.model");

app.get("/", async (req, res) => {
  const studentModal = mongoose.model("student");
  const studentData = await studentModal.find({});

  res.status(200).json({
    status: "get all student",
    data: studentData,
  });
});

app.post("/api/AddStudent", async (req, res) => {
  const studentModal = mongoose.model("student");
  const { idNumber, firstName, middleName, lastName, course, year } = req.body;
  const studentData = await studentModal.findOne({ idNumber });
  try {
    if (
      !idNumber ||
      !firstName ||
      !middleName ||
      !lastName ||
      !course ||
      !year
    ) {
      throw "Please fill out the form";
    }

    if (studentData) throw "this user already exists";

    const student = await studentModal.create({
      idNumber: idNumber,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      course: course,
      year: year,
    });
    res.status(200).json({
      status: "student Added Success",
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error,
    });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
