// script.js

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate successful form submission
    formMessage.classList.remove("hidden");
    contactForm.reset();

    // Hide the success message after 3 seconds
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 3000);
  });
});
