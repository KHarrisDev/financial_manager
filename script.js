"use strict";
function getInputValue() {
    let cardHolderValue = document.getElementById('card-holder').value;
    let accountNumber = document.getElementById('account-number').value;
    let expiryDate = document.getElementById('expiry-date').value;
    let cardNetwork = document.getElementById('card-network').value;
    let balance = document.getElementById('balance').value;
    
    console.log(cardHolderValue);
    console.log(accountNumber);
    console.log(expiryDate);
    console.log(cardNetwork);
    console.log(balance);

    // create an object with the rest of inputs
    // test the inputs and the object
    // push to array to display card
}

// close module