// to count truthy values 
function returnTruthy(array) {
    let amount = 0;
    for (let item of array) {
      if (item.toLowerCase()=== 'true') {
        amount++;
      }
    }
    return amount;
  }
  
  // button click
  function displayTruthy() {
    let inputElement = document.getElementById('inputAmount');
    let answer = document.getElementById('answer');
    let inputAmount = inputElement.value.split(',').map(value => value.trim());
    let amountTruthy = returnTruthy(inputAmount);
  
    answer.textContent = `Number of truthy values: ${amountTruthy}`;
  }
  
  // event listener for button
  document.getElementById('countTruthy').addEventListener('click', displayTruthy);