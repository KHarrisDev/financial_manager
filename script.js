"use strict";

/*
    const DUMMY_OBJECT = {};
*/ 

const userAccounts = [];

const container = document.getElementById('container');
const wallet = document.querySelector('.wallet');
const accounts = document.querySelector('.accounts');
const accountCard = document.querySelector('.account-card');
const addAccountModal = document.querySelector('.add-account-modal');
const createAccountHeader = document.querySelector('.create-account-header');
const chooseAccountHeader = document.querySelector('.choose-account-header');
const message = document.querySelector('.message');

// Buttons
const btn = document.querySelector('.btn');
const btnCreateAccount = document.querySelector('.btn-create-account');
const btnAddAccount = document.querySelector('.btn-add-account');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


function init() {
    wallet.classList.remove('hidden');
    if (userAccounts.length <= 0) {
        createAccountHeader.classList.remove('hidden');
        message.classList.remove('hidden');
        btnCreateAccount.classList.remove('hidden');
        console.log(`userAccounts array has ${userAccounts.length} objects.`);
    } else {
        console.log(userAccounts.length);
        accounts.classList.remove('hidden');
        accountCard.classList.remove('hidden');
        btnCreateAccount.textContent = 'Add Another Account';
        btnPrev.classList.remove('hidden');
        btnNext.classList.remove('hidden');
        
        //if (userAccount[0])
        //create a for loop to cycle through the accounts
        //add arrows to the accountCard class
        console.log(userAccounts[0].transactions[0]);
        console.log(`Updated userAccounts array has ${userAccounts.length} objects.`);
        console.log('add arrows to cycle through accounts');
    }
}
init();

function cycleAccounts() {
    let validateCycle;
    if (userAccounts > 0) {
        validateCycle = true;
    } else {
        validateCycle = false;
    }
    return validateCycle;
}
cycleAccounts();

function createAccount(event) {
    event.preventDefault();
    wallet.classList.add('hidden');
    addAccountModal.classList.remove('hidden');
}
btnCreateAccount.addEventListener('click', createAccount);

const generateID = () => {
    const accountID = Math.floor(Math.random() * 100000) + 1;
    return accountID;
};

function addNewAccount(event) {
    event.preventDefault();

    const cardHolderInput = document.querySelector('.card-holder');
    const accountNumberInput = document.querySelector('.account-number');
    const expiryDateInput = document.querySelector('.expiry-date');
    const cardNetworkInput = document.querySelector('.card-network');
    const balanceInput = document.querySelector('.balance');

    const newAccount = {
        cardHolderInput: cardHolderInput.value,
        accountNumberInput: Number(accountNumberInput.value),
        expiryDateInput: new Date(expiryDateInput.value).toLocaleDateString(),
        cardNetworkInput: cardNetworkInput.value,
        balanceInput: Number(balanceInput.value),
        memberID: Number(generateID()),
        transactions: [222],
    }
    console.log(newAccount);
    userAccounts.push(newAccount);

    // Form reset
    // Add another button to submit input & immediately add another user
    cardHolderInput.value = '';
    accountNumberInput.value = '';
    expiryDateInput.value = '';
    cardNetworkInput.value = '';
    balanceInput.value = '';

    addAccountModal.classList.add('hidden');
    createAccountHeader.classList.add('hidden');
    message.classList.add('hidden');
    chooseAccountHeader.classList.remove('hidden');
    
    init();

    displayAccounts(userAccounts);
}
btnAddAccount.addEventListener('click', addNewAccount);

function displayAccounts(acc) {
    //create a variable thats a counter
    //create event handlers that increment/decrement the counter
    //once clicked, the eventlistener calls displayAccount() with the new increment/decrement set for i
    //create the for loop with initial variable being the counter

    console.log(acc);
    acc.forEach(function(user) {
        const htmlTemplate = `
            <div class="account-card hidden">
                <h3>Card Holder Name: ${user.cardHolderInput}</h3>
                <h3>Account Number: ${user.accountNumberInput}</h3>
                <h3>Expiry Date: ${user.expiryDateInput}</h3>
                <h3>Card Network: ${user.cardNetworkInput}</h3>
                <h3>Balance: ${user.balanceInput}</h3>
            </div>
        `;
        accounts.insertAdjacentHTML('afterbegin', htmlTemplate);
    });
}