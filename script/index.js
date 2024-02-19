function seatChoiceA1() {
    removeHiddenTicket('A1');
    addBgInButton('sit-a1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-a1')
}
function seatChoiceA2() {
    removeHiddenTicket('A2');
    addBgInButton('sit-a2')
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-a2')
}
function seatChoiceA3() {
    removeHiddenTicket('A3');
    addBgInButton('sit-a3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-a3')
}
function seatChoiceA4() {
    removeHiddenTicket('A4');
    addBgInButton('sit-a4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-a4')
}
function seatChoiceB1() {
    removeHiddenTicket('B1');
    addBgInButton('sit-b1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-b1')
}
function seatChoiceB2() {
    removeHiddenTicket('B2');
    addBgInButton('sit-b2');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-b2')
}
function seatChoiceB3() {
    removeHiddenTicket('B3');
    addBgInButton('sit-b3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-b3')
}
function seatChoiceB4() {
    removeHiddenTicket('B4');
    addBgInButton('sit-b4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-b4')
}
function seatChoiceC1() {
    removeHiddenTicket('C1');
    addBgInButton('sit-c1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-c1')
}
function seatChoiceC2() {
    removeHiddenTicket('C2');
    addBgInButton('sit-c2');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-c2')
}
function seatChoiceC3() {
    removeHiddenTicket('C3');
    addBgInButton('sit-c3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-c3')
}
function seatChoiceC4() {
    removeHiddenTicket('C4');
    addBgInButton('sit-c4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-c4')
}
function seatChoiceD1() {
    removeHiddenTicket('D1');
    addBgInButton('sit-d1');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-d1')
}
function seatChoiceD2() {
    removeHiddenTicket('D2');
    addBgInButton('sit-d2');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-d2')
}
function seatChoiceD3() {
    removeHiddenTicket('D3');
    addBgInButton('sit-d3');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-d3')
}
function seatChoiceD4() {
    removeHiddenTicket('D4');
    addBgInButton('sit-d4');
    addTicketNumber('seat-add');
    countSeatsLeft('seats-left');
    SumTicketPrice();
    buttonDisable('sit-d4')
}

function successSectionOn() {
    removeHiddenTicket('success-section');
    addHiddenTicket('all-section');
    SumTicketPrice();
}

function goBackHomePage() {
    addHiddenTicket('success-section');
    removeHiddenTicket('all-section');
}


function goTicketSection() {
    window.scrollBy(0, window.innerWidth);
    SumTicketPrice();
}

function SumTicketPrice() {
    let ticketPriceArray = [];
    let ticketPush = ticketPriceArray.push = parseFloat(document.getElementById('ticket-pice').innerText);
    console.log(ticketPush);
    const totalBuyTicket = document.getElementById('seat-add').innerText;

    let newPrice = ticketPush * totalBuyTicket
    console.log(newPrice)

    const displayPriceText = document.getElementById('total-price');
    displayPriceText.innerText = newPrice;
    const displayGrandPriceText = document.getElementById('grand-price');
    displayGrandPriceText.innerText = newPrice;
}

function discount() {
    const inputText = document.getElementById('discount-input').value

    if (inputText === 'NEW15') {
        let ticketPriceArray = [];
        let ticketPush = ticketPriceArray.push = parseFloat(document.getElementById('ticket-pice').innerText);
        const totalBuyTicket = document.getElementById('seat-add').innerText;
        let newPrice = ticketPush * totalBuyTicket
        const displayPriceText = document.getElementById('total-price');
        displayPriceText.innerText = newPrice;
        const grandPriceDiscount = newPrice * 0.15;
        const grandPrice = newPrice - grandPriceDiscount;
        const displayGrandPriceText = document.getElementById('grand-price');
        displayGrandPriceText.innerText = grandPrice;
        addHiddenTicket('discount-input')
        addHiddenTicket('apply-button')

    }
    else if (inputText === 'Couple 20') {
        let ticketPriceArray = [];
        let ticketPush = ticketPriceArray.push = parseFloat(document.getElementById('ticket-pice').innerText);
        const totalBuyTicket = document.getElementById('seat-add').innerText;
        let newPrice = ticketPush * totalBuyTicket
        const displayPriceText = document.getElementById('total-price');
        displayPriceText.innerText = newPrice;
        const grandPriceDiscount = newPrice * 0.20;
        const grandPrice = newPrice - grandPriceDiscount;
        const displayGrandPriceText = document.getElementById('grand-price');
        displayGrandPriceText.innerText = grandPrice;
        addHiddenTicket('discount-input')
        addHiddenTicket('apply-button')
    }
}

let selectedSits = [];

function toggleSit(sitNumber) {
    const index = selectedSits.indexOf(sitNumber);
    if (index === -1 && selectedSits.length < 4) {
        selectedSits.push(sitNumber);
    } else if (index !== -1) {
        selectedSits.splice(index, 1);
    } else {
        alert("You ID Should Select Only 4 Seat");
    }
    updateButtons();
}

function updateButtons() {
    const buttons = document.querySelectorAll('.sit-button');
    for (const button of buttons) {
        const sitNumber = parseInt(button.textContent.split(' ')[1]);
        const isActive = selectedSits.includes(sitNumber);
        button.classList.toggle('active', isActive);
        button.disabled = selectedSits.length === 4 && !isActive;
        button.classList.toggle('disabled', selectedSits.length === 4 && !isActive);
    }
}