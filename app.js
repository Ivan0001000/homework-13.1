document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    let hasErrors = false;

    if (name === "") {
      showError("name-error", "Name is required.");
      hasErrors = true;
    }

    if (message.length < 5) {
      showError("message-error", "Message must be at least 5 characters long.");
      hasErrors = true;
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
      showError(
        "phone-error",
        "Phone number must start with +380 and have 12 digits."
      );
      hasErrors = true;
    }

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      showError("email-error", "Email must contain '@' and a valid domain.");
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    if (!hasErrors) {
      console.log("Name:", name);
      console.log("Message:", message);
      console.log("Phone:", phone);
      console.log("Email:", email);
      document.getElementById("contactForm").reset();
    }
  });

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = errorMessage;
  errorElement.style.color = "red";
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => {
    error.innerText = "";
  });
}
