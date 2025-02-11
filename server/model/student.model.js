const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  idNumber: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  course: {
    type: String,
  },
  year: {
    type: Number,
  },
});

const studentModal = mongoose.model("student", studentSchema);

module.exports = studentModal;
