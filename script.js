"use strict";
const container = document.getElementById('container');
const userAccounts = [];
const wallet = document.querySelector('.wallet');
const accountCard = document.querySelector('.account-card');
const addAccountModal = document.querySelector('.add-account-modal');
const createAccountHeader = document.querySelector('.create-account-header');
const chooseAccountHeader = document.querySelector('.choose-account-header');
const message = document.querySelector('.message');
// Buttons
const btn = document.querySelector('.btn');
const btnCreateAccount = document.querySelector('.create-account');
const btnAddAccount = document.querySelector('.add-account');

function init() {
    wallet.classList.remove('hidden');
    console.log(userAccounts.length);
    if (userAccounts.length <= 0) {
        createAccountHeader.classList.remove('hidden');
        message.classList.remove('hidden');
        btnCreateAccount.classList.remove('hidden');
        console.log(`userAccounts array has ${userAccounts.length} objects.`);
    } else {
        accountCard.classList.remove('hidden');
        // wallet.classList.remove('hidden');
        console.log(`Updated userAccounts array has ${userAccounts.length} objects.`);
        console.log(`Dynamically render the data here`);
        console.log('Create an html template');
    }
}
init();

function createAccount(event) {
    event.preventDefault();
    wallet.classList.add('hidden');
    addAccountModal.classList.remove('hidden');
}
btnCreateAccount.addEventListener('click', createAccount);

function addNewAccount(event) {
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

function displayAccounts(accounts) {
    accounts.forEach(function(user) {
        const htmlTemplate = `
            <div class="account-card">
                <h3>Card Holder Name: ${user.cardHolderInput}</h3>
                <h3>Account Number: ${user.accountNumberInput}</h3>
                <h3>Expiry Date: ${user.expiryDateInput}</h3>
                <h3>Card Network: ${user.cardNetworkInput}</h3>
                <h3>Balance: ${user.balanceInput}</h3>
            </div>
        `;
        accountCard.insertAdjacentHTML('afterbegin', htmlTemplate);
    });
}