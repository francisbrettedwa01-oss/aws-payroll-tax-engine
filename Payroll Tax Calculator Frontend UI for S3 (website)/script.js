const apiURL = "https://tot3iwq09d.execute-api.us-west-2.amazonaws.com/prod/calculate"; 

function calculateTax() {
  // this reads what the user typed
  let grossPayInput = document.getElementById("grossPay").value;
  let preTaxDeductionsInput = document.getElementById("preTaxDeductions").value;
  
  //This  converts the numerical value inputted by the user
  let grossPay = parseFloat(grossPayInput) || 0; 
  let preTax = parseFloat(preTaxDeductionsInput) || 0;
  
  //creates the object containing the data AWS Lambda-Python is expected to receive
  let requestData = {
    grossPay: grossPay,
    preTaxDeductions: preTax
  };
  
  //Output DOM elements - this will display returned numbers based on user input
  let outTaxable = document.getElementById("outTaxable");
  let outFed = document.getElementById("outFed");
  let outState = document.getElementById("outState");
  let outSS = document.getElementById("outSS"); 
  let outMed = document.getElementById("outMed"); 
  let outSDI = document.getElementById("outSDI"); 
  let outTotalTax = document.getElementById("outTotalTax");
  let outNet =document.getElementById("outNet"); 
  
  //this box will reveal when the calcuations are done
  let resultsBox = document.getElementById("results"); 
  
  //this will send the request to the API gateway using fetch and POST method
  fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    //Write the return numbers into the HTML placeholders
    outTaxable.innerText = data.taxableWages.toFixed(2);
    outFed.innerText = data.federalTax.toFixed(2);
    outState.innerText = data.stateTax.toFixed(2);
    outSS.innerText = data.socialSecurity.toFixed(2);
    outMed.innerText = data.medicare.toFixed(2);
    outSDI.innerText = data.sdi.toFixed(2);
    outTotalTax.innerText = data.totalDeductions.toFixed(2);
    outNet.innerText = data.netPay.toFixed(2);
    
    //Reveal the result box
    resultsBox.style.display = "block";
  })
  .catch(function(error){
    console.log("Error", error);
    alert("Could not calculate taxes. Check the Console for Details");
  });
}

