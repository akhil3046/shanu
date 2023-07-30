"use strict";

const data = [];
let regnum;
let studentDataJson;

function createArray(name, regNumber, Faculty, status, description) {
  const student = {
    name_in_form: name,
    regNum_in_form: regNumber,
    faculty_in_form: Faculty,
    status_in_form: status,
    description_in_form: description,
  };

  data.push(student);
  console.log(data);

  // storing the data in the local storage making the registration number as the key and the object as the value for that respective key

  regnum = student.regNum_in_form;
  studentDataJson = JSON.stringify(student);
  localStorage.setItem(regnum, studentDataJson);

  //   console.log(newData);
  console.log(JSON.parse(localStorage.getItem(regnum)));
}
console.log(data);

document
  .getElementById("Std_query")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let regNumber = document.getElementById("regNumber").value;
    let Faculty = document.getElementById("Faculty").value;
    let status = document.getElementById("status").value;
    let description = document.getElementById("description").value;

    createArray(name, regNumber, Faculty, status, description);
    this.reset();
  });

function validateRegNumber() {
  var regNumber = document.getElementById("regNumber").value;

  // Check if roll number is empty
  if (regNumber === "") {
    document.getElementById("error-message").textContent =
      "Please enter your roll number.";
    return false;
  }

  // Check if roll number has correct length
  if (regNumber.length !== 12) {
    document.getElementById("error-message").textContent =
      "Roll number must be 12 digits long.";
    return false;
  }

  // Check if first 7 digits are correct
  if (regNumber.slice(0, 7) !== "1220103") {
    document.getElementById("error-message").textContent =
      "Roll number must start with 1220103.";
    return false;
  }

  // Check if next 2 digits are between 01-33
  var nextTwoDigits = regNumber.slice(7, 9);
  if (parseInt(nextTwoDigits) < 1 || parseInt(nextTwoDigits) > 33) {
    document.getElementById("error-message").textContent =
      "Roll number's next two digits must be between 01-33.";
    return false;
  }

  // Check if last 3 digits form a number between 001-070
  var lastThreeDigits = regNumber.slice(9, 12);
  if (parseInt(lastThreeDigits) < 1 || parseInt(lastThreeDigits) > 70) {
    document.getElementById("error-message").textContent =
      "Roll number's last three digits must form a number between 001-070.";
    return false;
  }

  // Roll number is valid
  return true;
}

// local storage connection confirmed -  yes

// if (localStorage) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
