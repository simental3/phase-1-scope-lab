// Write your solution in this file!
// Examples of what NOT TO DO:

// Global Variables
var customerName = 'bob';   // ** pre-redefined **
const leastFavoriteCustomer = 'Clippers fan';   // ** pre-redefined **

// Functions
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();      // DO NOT use the return keyword, using it will return 'BOB',
}                                                   // but it will NOT redefine the variable: customerName


function setBestCustomer() {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Warriors fan';
}