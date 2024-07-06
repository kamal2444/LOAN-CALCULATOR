function calculator() {
  let loanamount = document.getElementById("Loan");
  let value = loanamount.value
  console.log(value);
  let interastamount = document.getElementById("Interest");
  let value2 = interastamount.value;
  console.log(value2);
  let monthlyamount = document.getElementById("Months");
  let value3 = monthlyamount.value;
  console.log(value3);

  interest = value * value2 /value3 ;
  console.log(interest);
  monthlyamount = (value / value3 + interest);
  console.log(monthlyamount);
  document.getElementById("monthly_payment").innerHTML =  `Monthly Payment: ${monthlyamount}`;
}
