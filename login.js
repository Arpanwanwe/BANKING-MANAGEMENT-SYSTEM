// console.log('javaScript start');
document
  .getElementById("btn-submit")
  .addEventListener("click", function (event) {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if (email === "Amol","admin" && password === "0965","9383") {
      window.location.href = "bank.html";
    } else {
      alert("Email or Password is incorrect!");
      emailField.value = "";
      passwordField.value = "";
    }
  });
