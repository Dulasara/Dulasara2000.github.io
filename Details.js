
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

 // Get form inputs
 const expirationMonthSelect = document.getElementById("expirationMonth");
 const expirationDaySelect = document.getElementById("expirationDay");
 const cardHolderNameInput = document.getElementById("cardHolderName");

 // Create an object to store form input values
 const paymentData = {
     cardNumber: cardNumberInput.value,
     expirationMonth: expirationMonthSelect.value,
     expirationDay: expirationDaySelect.value,
     cvv: cvvInput.value,
     cardHolderName: cardHolderNameInput.value
 };
     let form = document.getElementById('detailsForm');

     form.addEventListener('submit', function (event) {
         event.preventDefault(); // Prevent form submission for now

         // Validate the form inputs
         if (!fullNameInput.value.trim()) {
             showError('Full Name is required.');
             return;
         }

         if (!mobileNumberInput.value.trim()) {
              showError('Mobile Number is required.');
           return;
         }

         if (!emailInput.value.trim()) {
              showError('Email is required.');
             return;
         }

         if (emailInput.value !== confirmEmailInput.value) {
             showError('Email and Confirm Email do not match.');
             return;
         }

             // If gender is not selected, set it to null
             const gender = genderInput.value || null;

             // Form data is valid, handle form submission or other actions here
             // For this example, let's just show a success message
             showSuccess('Registration successful!');
             });

             localStorage.setItem("cardNumber", paymentData.cardNumber);
             localStorage.setItem("expirationMonth", paymentData.expirationMonth);
             localStorage.setItem("expirationDay", paymentData.expirationDay);
             localStorage.setItem("cvv", paymentData.cvv);
             localStorage.setItem("cardHolderName", paymentData.cardHolderName);

             // Redirect to confirmation page
             window.location.href = "file:///C:/Html%20pra%20co/Website/pic/confirm.html";
         });
     });

     document.addEventListener('DOMContentLoaded', function () {
         const ticketData = localStorage.getItem('ticketData');
         const reservationDate = localStorage.getItem('reservationDate');
         const timeSlot = localStorage.getItem('timeSlot');
         let totalPayable = localStorage.getItem('totalPayable');
         
      const date=document.getElementById('date');
       date.innerHTML=reservationDate;

       

        const seetotal=document.getElementById('seetotal');
        seetotal.innerHTML=totalPayable;

        const slAdult = localStorage.getItem('AdultTickets');
        console.log(slAdult);
        
     });

     const slAdultTickets = localStorage.getItem('slAdultTickets');
     document.getElementById('summarySLAdult').textContent = slAdultTickets;
     const slAdultTotal = localStorage.getItem('slAdultTotal');
     document.getElementById('priceSLAdult').textContent =slAdultTotal;
      
     const slChildTickets= localStorage.getItem('slChildTickets');
     document.getElementById('summarySLChild').textContent = slChildTickets;
     const slChildTotal = localStorage.getItem('slChildTotal');
     document.getElementById('priceSLChild').textContent =slChildTotal;
     
     const foreignerAdultTickets = localStorage.getItem('foreignerAdultTickets');
     document.getElementById('summaryForeignerAdult').textContent =foreignerAdultTickets;
     const foreignerAdultTotal = localStorage.getItem('foreignerAdultTotal');
     document.getElementById('priceForeignerAdult').textContent =foreignerAdultTotal;
     
     const foreignerChildTickets= localStorage.getItem('foreignerChildTickets');
     document.getElementById('summaryForeignerChild').textContent =foreignerChildTickets;
     const foreignerChildTotal = localStorage.getItem('foreignerChildTotal');
     document.getElementById('priceForeignerChild').textContent =foreignerChildTotal;
     
     