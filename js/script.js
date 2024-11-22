const mainEl = document.getElementById("main-form");
const form = document.querySelector("form");
const successMessageEl = document.querySelector(".success-message");

// Select input fields, radio buttons, checkbox and query container
const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const emailAddressEl = document.querySelector("#emailAddress");
const querySectEl = document.querySelector(".query-sect");
const queryTypeEl = document.querySelectorAll('input[name="query-selection"]');
const genQueryEl = document.querySelector("#general-query-div");
const supQueryEl = document.querySelector("#support-query-div");
const genSup = document.querySelectorAll(".query-div");
const userMessageEl = document.querySelector("#user-message");
const consentEl = document.querySelector("#checkbox");
const inputEl = document.querySelectorAll("input");
const buttonEl = document.querySelector(".submit-btn");

// Select Error Messages
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const queryError = document.querySelector("#query-error");
const consentError = document.querySelector("#consent-error");
const userMessageError = document.querySelector("#user-message-error");

// Helper function to show/hide error messages
function updateVisibility(element, shouldShow) {
  if (shouldShow) {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate First Name
  if (firstNameEl.value.trim() === "") {
    updateVisibility(firstNameError, true);
    firstNameEl.classList.add("active-error");
    isValid = false;
  } else {
    updateVisibility(firstNameError, false);
    firstNameEl.classList.remove("active-error");
  }

  // Validate Last Name
  if (lastNameEl.value.trim() === "") {
    updateVisibility(lastNameError, true);
    lastNameEl.classList.add("active-error");
    isValid = false;
  } else {
    updateVisibility(lastNameError, false);
    lastNameEl.classList.remove("active-error");
  }

  // Validate Email Address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailAddressEl.value.trim().match(emailRegex)) {
    updateVisibility(emailError, true);
    emailAddressEl.classList.add("active-error");
    isValid = false;
  } else {
    updateVisibility(emailError, false);
    emailAddressEl.classList.remove("active-error");
  }

  // Validate Query selection Radio Buttons
  let isQuerySelected = false;
  queryTypeEl.forEach((radio) => {
    if (radio.checked) isQuerySelected = true;
  });

  if (!isQuerySelected) {
    updateVisibility(queryError, true);
    isValid = false;
    genSup.forEach((but) => {
      but.classList.add("active-error");
    });
  } else {
    updateVisibility(queryError, false);
    genSup.forEach((but) => {
      but.classList.remove("active-error");
    });
  }

  // Validate Checkbox
  if (!consentEl.checked) {
    updateVisibility(consentError, true);
    isValid = false;
  } else {
    updateVisibility(consentError, false);
  }

  // Validate User Message
  if (userMessageEl.value.trim() === "") {
    updateVisibility(userMessageError, true);
    userMessageEl.classList.add("active-error");
    isValid = false;
  } else {
    updateVisibility(userMessageError, false);
    userMessageEl.classList.remove("active-error");
  }
  // Submit the form if valid
  if (isValid) {
    updateVisibility(successMessageEl, true);
    //reset the form
    form.reset();
    // Remove active-error classes if present
    document.querySelectorAll(".active-error").forEach((el) => {
      el.classList.remove("active-error");
    });
  }
});

// buttonEl.addEventListener("click", () => {
//   updateVisibility(successMessageEl, true);
// });
