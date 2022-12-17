// Examples of what NOT TO DO:


// Global Variables
var customerName = 'bob';   // => bob   ** pre-redefined **
const leastFavoriteCustomer = 'Clippers fan';   // => bob   ** pre-redefined **

// Functions
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();      // DO NOT use the return keyword, using it will return 'BOB',
}                                                   // but it will NOT redefine the variable: customerName
// upperCaseCustomerName();
// console.log('redefined', customerName);  // => BOB


function setBestCustomer() {
    bestCustomer = 'not bob';
}
// setBestCustomer();
// console.log('bestCustomer', bestCustomer);  // => not bob


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
// overwriteBestCustomer();
// console.log('reassigned', bestCustomer);  // => maybe bob


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Warriors fan';
}
// console.log('changeLeastFavoriteCustomer', changeLeastFavoriteCustomer());