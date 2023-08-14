    //
    document.addEventListener('DOMContentLoaded', function () {
        const ticketData = localStorage.getItem('ticketData');
        const reservationDate = localStorage.getItem('reservationDate');
        const timeSlot = localStorage.getItem('timeSlot');
        let totalPayable = localStorage.getItem('totalPayable');
        
     const date=document.getElementById('date');
      date.innerHTML=reservationDate;
      const summarydate=document.getElementById('summarydate');
      summarydate.innerHTML=reservationDate;
        //
        const summaryTimeSlot = document.getElementById('summary-time-slot');
        summaryTimeSlot.innerHTML = timeSlot;
      

       const seetotal=document.getElementById('seetotal');
       seetotal.innerHTML=totalPayable;

       const slAdult = localStorage.getItem('AdultTickets');
       console.log(slAdult);
       
    });

    const slAdultTickets = localStorage.getItem('slAdultTickets');
    document.getElementById('summarySLAdult').textContent = slAdultTickets;
    const slAdultTotal = localStorage.getItem('slAdultTotal');
    document.getElementById('priceSLAdult').textContent =slAdultTotal;
    // 
    const slChildTickets= localStorage.getItem('slChildTickets');
    document.getElementById('summarySLChild').textContent = slChildTickets;
    const slChildTotal = localStorage.getItem('slChildTotal');
    document.getElementById('priceSLChild').textContent =slChildTotal;
    //
    const foreignerAdultTickets = localStorage.getItem('foreignerAdultTickets');
    document.getElementById('summaryForeignerAdult').textContent =foreignerAdultTickets;
    const foreignerAdultTotal = localStorage.getItem('foreignerAdultTotal');
    document.getElementById('priceForeignerAdult').textContent =foreignerAdultTotal;
    //
    const foreignerChildTickets= localStorage.getItem('foreignerChildTickets');
    document.getElementById('summaryForeignerChild').textContent =foreignerChildTickets;
    const foreignerChildTotal = localStorage.getItem('foreignerChildTotal');
    document.getElementById('priceForeignerChild').textContent =foreignerChildTotal;
    //