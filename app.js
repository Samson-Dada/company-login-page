//GENERAL
const overlay = document.querySelector(".overlay");
const loginSection = document.querySelector(".login__section");
const staffSection = document.querySelector(".staff__section");
const visitorSection = document.querySelector(".visitor__section");
const visitorFullName = document.querySelector(".visitor-fullName");
const staffFullName = document.querySelector(".staff-fullname");
////////////////

const updateSection = document.querySelector(".update__section");

const updateDate = document.querySelector(".update__date");
const updateTime = document.querySelector(".update__time");

// Update Date & Time
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
updateDate.textContent = `${day}/${month}/${year}`;

function startTime() {
  const time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let t = "AM";

  if (hr > 12) {
    hr -= 12;
    t = "PM";
  }
  if (hr == 0) {
    hr = 12;
    t = "AM";
  }
  let currentTime = `${hr}:${min}:${sec} ${t}`;
  updateTime.innerHTML = currentTime;
}

const removeStaffForm = e => {
  if (e.target.classList.contains("btn--close-modal")) {
    staffSection.classList.remove("show__section");
    overlay.classList.remove("show-overlay");
  }
};

setInterval(startTime, 1000);

startTime();

////////////////

// WELCOME SECTION//
const welcomeSection = document.querySelector(".welcome__section");
const welcome__name = document.querySelector(".welcome__name");

const showWelcome = (fullName, section) => {
  welcome__name.textContent = fullName;
  welcomeSection.classList.add("show-welcome");
  section.classList.remove("show__section");
  overlay.classList.remove("show-overlay");
  loginSection.style.display = "none";
};
//Form input style effect
const inputStyleOutlineGreen = value => {
  value.style.outlineColor = "#74D171";
};
const inputStyleOutlineRed = value => {
  value.style.outlineColor = "red";
};
//

////// STAFF
const staffFormContainer = () => {
  const staffLoginBtn = document.querySelector(".staff__login--btn");
  const staffID = document.querySelector(".staffIDInput");
  const staffDepartment = document.querySelector(".staffDepartmentInput");
  const staffForm = document.getElementsByTagName("form")[1];
  const errorStaff = document.querySelectorAll(".error-staff");

  // Open Form
  const openStaffForm = function (e) {
    if (e.target.classList.contains("staff__login--btn")) {
      staffSection.classList.add("show__section");
      overlay.classList.add("show-overlay");
    }
  };
  staffLoginBtn.addEventListener("click", openStaffForm);

  // check user input & Validation
  staffFullName.addEventListener("input", function (event) {
    if (staffFullName.validity.valid) {
      errorStaff[0].textContent = "";
      errorStaff[0].classList = "error-staff";
      console.log(staffFullName.value);
      inputStyleOutlineGreen(staffFullName);
    } else {
      validationError(
        staffFullName,
        0,
        `Full name should be at least ${staffFullName.minLength} characters; you entered ${staffFullName.value.length} characters`
      );
      inputStyleOutlineRed(staffFullName);
    }
  });
  staffID.addEventListener("input", function (event) {
    if (staffID.validity.valid) {
      errorStaff[1].textContent = "";
      errorStaff[1].classList = "error-staff";
      inputStyleOutlineGreen(staffID);
    } else {
      validationError(staffID, 1, `StaffID should be at least ${staffID.minLength} characters; you entered ${staffID.value.length} characters`);
    }
    inputStyleOutlineRed(staffID);
  });

  staffDepartment.addEventListener("input", function (event) {
    if (staffDepartment.validity.valid) {
      errorStaff[2].textContent = "";
      errorStaff[2].classList = "error-staff active";
      inputStyleOutlineGreen(staffDepartment);
    } else {
      validationError(
        staffDepartment,
        2,
        `Staff department should be at least ${staffDepartment.minLength} characters; you entered ${staffDepartment.value.length} characters`
      );
      inputStyleOutlineRed(staffDepartment);
    }
  });

  //form submit
  staffForm.addEventListener("submit", function (event) {
    if (!staffFullName.validity.valid) {
      validationError(staffFullName, 0, `Enter your full name`);
      event.preventDefault();
    }
    if (!staffID.validity.valid) {
      validationError(staffID, 1, `Enter your staffID here`);
      event.preventDefault();
    }
    if (!staffDepartment.validity.valid) {
      validationError(staffDepartment, 2, `Enter your staff department`);

      event.preventDefault();
    } else {
      showWelcome(staffFullName.value, staffSection);
      event.preventDefault();
    }
  });

  // Form Validation
  function validationError(classname, index, message) {
    if (classname.validity.valueMissing) {
      errorStaff[index].textContent = message;
    } else if (classname.validity.tooShort) {
      errorStaff[index].textContent = `${message}.`;
    }
    errorStaff[0].classList = "error-staff active";
    errorStaff[1].classList = "error-staff active";
    errorStaff[2].classList = "error-staff active";
  }

  //Remove form
  staffSection.addEventListener("click", removeStaffForm);
};

staffFormContainer();

///// VISITOR/////
const visitorFormContainer = () => {
  const visitorPhoneNumber = document.querySelector(".input-phoneNumber");
  const visitorTextarea = document.querySelector(".textarea");
  const visitorLoginBtn = document.querySelector(".visitor__login--btn");
  const visitorForm = document.getElementsByClassName("visitor__form")[0];
  // const visitorForm = document.querySelector(".visitor__form");
  const errorVisitor = document.querySelectorAll(".error-visitor");

  // Open form
  const openVisitorForm = function (e) {
    if (e.target.classList.contains("visitor__login--btn")) {
      visitorSection.classList.toggle("show__section");
      overlay.classList.add("show-overlay");
    }
  };
  visitorLoginBtn.addEventListener("click", openVisitorForm);

  visitorFullName.addEventListener("input", function (e) {
    if (visitorFullName.validity.valid) {
      errorVisitor[0].textContent = "";
      errorVisitor[0].classList = "error-visitor";
      inputStyleOutlineGreen(visitorFullName);
    } else {
      validationError(
        visitorFullName,
        0,
        `Full name should be at least ${visitorFullName.minLength} characters; you entered ${visitorFullName.value.length} characters`
      );
      inputStyleOutlineRed(visitorFullName);
    }
  });

  visitorPhoneNumber.addEventListener("input", function () {
    if (visitorPhoneNumber.validity.valid) {
      errorVisitor[1].textContent = "";
      errorVisitor[1].classList = "error-visitor";
      inputStyleOutlineGreen(visitorPhoneNumber);
    } else {
      validationError(
        visitorPhoneNumber,
        1,
        `Phone number should be at least ${visitorPhoneNumber.minLength} characters; you entered ${visitorPhoneNumber.value.length} characters`
      );
      inputStyleOutlineRed(visitorPhoneNumber);
    }
  });

  visitorTextarea.addEventListener("input", function () {
    if (visitorTextarea.validity.valid) {
      errorVisitor[2].textContent = "";
      errorVisitor[2].classList = "error-visitor";
      inputStyleOutlineGreen(visitorTextarea);
    } else {
      validationError(
        visitorTextarea,
        2,
        `Purpose of visit should be at least ${visitorTextarea.minLength} characters; you entered ${visitorTextarea.value.length} characters`
      );
      inputStyleOutlineRed(visitorTextarea);
    }
  });

  //Visitor form submit

  visitorForm.addEventListener("submit", function (e) {
    if (!visitorFullName.validity.valid) {
      e.preventDefault();
      validationError(visitorFullName, 0, `Enter full name`);
      visitorFullName.style.outlineColor = "red";
    }
    if (!visitorPhoneNumber.validity.valid) {
      e.preventDefault();
      validationError(visitorPhoneNumber, 1, `Enter phone number`);
      visitorPhoneNumber.style.outlineColor = "red";
    }
    if (!visitorTextarea.validity.valid) {
      e.preventDefault();
      validationError(visitorTextarea, 2, `Enter purpose of visiting`);
      visitorTextarea.style.outlineColor = "red";
    } else {
      showWelcome(visitorFullName.value, visitorSection);
      e.preventDefault();
    }
  });

  // Form Validation
  function validationError(classname, index, message) {
    if (classname.validity.valueMissing) {
      errorVisitor[index].textContent = message;
    } else if (classname.validity.tooShort) {
      errorVisitor[index].textContent = `${message}.`;
    }
    errorVisitor[0].classList = "error-visitor active";
    errorVisitor[1].classList = "error-visitor active";
    errorVisitor[2].classList = "error-visitor active";
  }
  const removeVisitorForm = e => {
    if (e.target.classList.contains("btn--close-modal")) {
      visitorSection.classList.remove("show__section");
      overlay.classList.remove("show-overlay");
    }
  };
  visitorSection.addEventListener("click", removeVisitorForm);
};

visitorFormContainer();
