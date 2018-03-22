//Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  e.preventDefault();
 //Hide Results
 document.getElementById('results').style.display = 'none';
 
 //Show Loader
 document.getElementById('loading').style.display = 'block';

setTimeout(calculateResults, 2000);
 
});

//Calculate Results
function calculateResults(){
  
  //UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const princible = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  //Compute monthly payments
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (princible*x*calculateInterest) /(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly*calculatePayments)-princible).toFixed(2);
    //Show results
    document.getElementById('results').style.display = 'block';
    //Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
   showError('Please Check you Numbers');
  //Hide results
  document.getElementById('results').style.display = 'none';
  //Hide loader
  document.getElementById('loading').style.display = 'none';
  }
}
  function showError(error){
    //Create div
    const errorDiv = document.createElement('div'); 
    
    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //Add class
    errorDiv.className = 'alert alert-danger';
    //Create Text Node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error above heading
    card.insertBefore(errorDiv, heading);

    //Clear Error after 3 sec
    setTimeout(clearError, 3000);
  }

  function clearError(){
    document.querySelector('.alert').remove();
  }

