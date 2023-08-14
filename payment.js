document.querySelector('.card-number-input').oninput = () =>{
  document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
  document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
  document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
  document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
  document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}































document.addEventListener("DOMContentLoaded", function() {
  const cardNumberInput = document.getElementById("cardNumber");
  const cvvInput = document.getElementById("cvv");

  // Hide the CVV input initially
  cvvInput.style.display = "none";

  // Add an event listener to the card number input for input changes
  cardNumberInput.addEventListener("input", function() {
      const cardNumber = cardNumberInput.value.replace(/\D/g, '');

      // Check if the card number has a length of 12 digits
      if (cardNumber.length === 12) {
          cvvInput.style.display = "block"; // Show the CVV input
      } else {
          cvvInput.style.display = "none";  // Hide the CVV input
      }
  });

  const form = document.getElementById("paymentForm");

// Add an event listener to the form for submission
form.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission

// Get other form inputs
const expirationMonthSelect = document.getElementById("expirationMonth");
const expirationDaySelect = document.getElementById("expirationDay");
const cardHolderNameInput = document.getElementById("cardHolderName");

// Save data to local storage
const paymentData = {
cardNumber: cardNumberInput.value,
expirationMonth: expirationMonthSelect.value,
expirationDay: expirationDaySelect.value,
cvv: cvvInput.value,
cardHolderName: cardHolderNameInput.value
};


localStorage.setItem("paymentData", JSON.stringify(paymentData));

// Redirect to confirmation page
window.location.href = "confirm.html";
});
});









