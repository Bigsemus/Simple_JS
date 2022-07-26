let oneHundred = 100;
let oneThousand = 1000;
let two = 2;

function calculate() {
  let moneyNum = Number(prompt(`"Enter the initial amount please", "it should be at leas then 1000"`));
  let yearNum = Number(prompt(`"How many years", "it should be at leas then 1"`));
  let percentNum = Number(prompt(`"What is the annual percentage", "it should be no more then 100"`));
  if (Number.isInteger(yearNum)) {
    if (moneyNum >= oneThousand && yearNum >= 1 && percentNum <= oneHundred) {
      let sum = (Math.pow(1 + percentNum / oneHundred, yearNum) * moneyNum).toFixed(two);
      return alert(`
           Initial amount: ${moneyNum} 
           Number of years: ${yearNum} 
           Percentage of year: ${percentNum} 

           Total profit: ${(sum - moneyNum).toFixed(two)} 
           Total amount: ${sum}`);
    } else {
      return alert(`“Invalid input data”.`);
    }
  } else {
    alert(`“Invalid input data”.`);
  }
}

calculate();