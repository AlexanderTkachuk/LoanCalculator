//listen for submit
let loanForm = document.getElementById('loan-form');

loanForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    //hide results
        document.querySelector('.results').style.display='none';
    //show loader
        document.getElementById('loading').style.display='block';

    setTimeout(calculateResults, 2000);
});
 
function calculateResults() {

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

         //show results
         document.querySelector('.results').style.display='block';
         //hide loader
             document.getElementById('loading').style.display='none';
    } else{
        showError('Please check your number');
        document.getElementById('loading').style.display='none';

    }

    //clear input value 
    amount.addEventListener('focus', (e)=> {
        amount.value = '';
    });
    interest.addEventListener('focus', (e)=> {
        interest.value = '';
    });
    years.addEventListener('focus', (e)=> {
        years.value = '';
    });
} 

function clearInput() {
    
}

function showError(error) {
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading=document.querySelector('.heading')
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv,heading);

    setTimeout(clearError,3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}