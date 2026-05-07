function validate() {
  let name = document.getElementsByClassName("x")[0].value.trim();
  let last = document.getElementsByClassName("e")[0].value.trim();
  let email = document.getElementsByClassName("y")[0].value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let namePattern = /^[a-zA-Z\s]+$/;

  if (!name || !namePattern.test(name)) {
    alert("Please enter a valid first name (letters only)");
  } else if (!last || !namePattern.test(last)) {
    alert("Please enter a valid last name (letters only)");
  } else if (!email || !emailPattern.test(email)) {
    alert("Please enter a valid email (example@domain.com)");
  } else {
    alert("Form submitted successfully!");
  }
}
