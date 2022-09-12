"use strict";

const userAccounts = [];

function init() {
    console.log(userAccounts.length);
    if (userAccounts.length <= 0) {
        console.log(`userAccounts array has ${userAccounts.length} objects.`);
    } else {
        console.log(`Updated userAccounts array has ${userAccounts.length} objects.`);
    }
}

init();

/*
Page should start out with 'Create your account' header and create account button

if there is no account
    (create class names for the headers)
    display 'Create your account' header,
    display text that say 'Your wallet is empty' animation coming soon
    display Create Account button to render modal class
        * Create a div for a card that holds account information.
        * Add elements in the card that serve as a placeholder for account information.
        * In script.js, add a function for rendering account information dynamically.
        * In this function, create a const that contains a html template for the card.
        * Insert the template in the HTML
    hide 'Choose your account' header,
    hide the account-card class 
    else
        Display 'Choose your account' header,
        display Create Account button to render modal class
        Display account in array that dynamically render new cards
        hide 'Create your account' header,
 */            

const container = document.getElementById('container');
const wallet = document.querySelector('.wallet');
const createAccountButton = document.querySelector('.create-account');
const btn = document.querySelector('.btn');
const addAccountButton = document.querySelector('.add-account');

// Added accounts from clickNewAccount()


function clickNewAccount(event) {
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

    // console.log(newAccount);
    userAccounts.push(newAccount);
    // console.log(userAccounts);

    cardHolderInput.value = '';
    accountNumberInput.value = '';
    expiryDateInput.value = '';
    cardNetworkInput.value = '';
    balanceInput.value = '';

    init();
}

// use forEach loop to clear form when using DRY
addAccountButton.addEventListener('click', clickNewAccount);
