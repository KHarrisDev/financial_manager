"use strict";

const wallet = document.querySelector('.wallet');
console.log(wallet.textContent);
/**
 * Create a div for a card that holds account information.
 * Add elements in the card that serve as a placeholder for account information.
 * In script.js, add a function for rendering account information dynamically.
 * In this function, create a const that contains a html template for the card.
 * Insert the template in the HTML
 */
const button = document.querySelector('.btn');

// use forEach loop to clear form when using DRY
button.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const cardHolderInput = document.querySelector('.card-holder');
    const accountNumberInput = document.querySelector('.account-number');
    const expiryDateInput = document.querySelector('.expiry-date');
    const cardNetworkInput = document.querySelector('.card-network');
    const balanceInput = document.querySelector('.balance');

    const newAccount = {
        cardHolderInput: cardHolderInput.value,
        accountNumberInput: accountNumberInput.value,
        expiryDateInput: expiryDateInput.value,
        cardNetworkInput: cardNetworkInput.value,
        balanceInput: balanceInput.value,
        transactions: [],
    }

    console.log(newAccount);
    wallet.push(newAccount);
    console.log(wallet);

    cardHolderInput.value = '';
    accountNumberInput.value = '';
    expiryDateInput.value = '';
    cardNetworkInput.value = '';
    balanceInput.value = '';
})