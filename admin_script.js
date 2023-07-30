"use strict";

// retrieving the data from the local storage
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const keys = Object.keys(localStorage);
    const buttonContainer = document.querySelector(".button-container");
    const buttons = document.querySelectorAll(".button");
    const modal = document.querySelector(".modal");
    // console.log(keys);
    //   console.log(buttonContainer);

    // retrieving the data for each key from the created array of keys

    keys.forEach((regnum) => {
      // creating a button for the registration numbers
      const button = document.createElement("button");
      button.textContent = regnum;
      button.id = regnum;
      buttonContainer.appendChild(button);
      // adding eventlisteners to each button
      button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(event) {
      const buttonid = event.target.id;
      console.log("button-clicked: ", buttonid);

      //   retreiving the data of that particular button id
      const studentDataJson = localStorage.getItem(buttonid);
      const studentData = JSON.parse(studentDataJson);
      console.log(studentData);

      //   adding data to the modal using innerHTML
      modal.innerHTML = `
      <h2>Student details</h2>
      <p><strong>Name: </strong> ${studentData.name_in_form}</p>
      <p><strong>Registration Number: </strong> ${studentData.regNum_in_form}</p>
      <p><strong>Faculty: </strong> ${studentData.faculty_in_form}</p>
      <p><strong>Status: </strong> ${studentData.status_in_form}</p>
      <p><strong>Description: </strong> ${studentData.description_in_form}</p>
      <button class="clear">Clear</button>`;
      modal.style.display = "block";

      const clearbutton = document.querySelector(".clear");
      clearbutton.addEventListener("click", function () {
        // clearing the modal after solving the issue using the clear button
        localStorage.removeItem(buttonid);
        modal.style.display = "none";

        // removing the registration number from the page after clear is clicked
        const buttonToRemove = document.getElementById(buttonid);
        buttonToRemove.remove();
      });
    }
  }

  //   handling the clicking of each registration number individually
);
