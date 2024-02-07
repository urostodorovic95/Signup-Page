const submitButton = document.querySelector("button");
const userFeedback = document.querySelector("#pw-problem-notify");
let pwConfirm = document.querySelector("input#pw-confirm");

pwConfirm.addEventListener("blur", (event) => {
  let pw = document.querySelector("input#pw");
  if (pw.value === pwConfirm.value) {
    processMatch();
  } else {
    processNoMatch();
  }
});

function processNoMatch() {
  userFeedback.innerHTML = "Passwords do not match.";
  submitButton.disabled = true;
  pwConfirm.style.border = "3px solid red";
  pw.style.border = "3px solid red";
  submitButton.classList.toggle("button-disable")
}

function processMatch() {
  userFeedback.innerHTML = "";
  submitButton.disabled = false;
  pwConfirm.style.border = "3px solid green";
  pw.style.border = "3px solid green";
  submitButton.classList.toggle("button-disable")
}
