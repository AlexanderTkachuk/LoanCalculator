//listen for submit
let loanForm = document.getElementById('loan-form');

loanForm.addEventListener('submit', calculateResults);
 
function calculateResults(e) {
    e.preventDefault();

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const mounthlyPayment = document.getElementById('mounthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterst = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterst = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1+calculateInterst, calculatePayments);
    const monthly = (principal*x*calculateInterst)/(x-1);

    if(isFinite(monthly)) {
        mounthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterst.value = ((monthly*calculatePayments)-principal).toFixed(2);
    } else{
        console.log('Please check your number');
    }

} 
