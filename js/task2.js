let max = 0;
let mid = 0;
let min = 0;
let not = 0;
let randomNum;
let NumberForRandom = 5;
let fifty = 50;
let oneHundred = 100;
let twentyFive = 25;
let four = 4;
let eight = 4;
let userNum;

function game() {
  if (confirm(' "Do you want to play a game?" ')) {
    roulette();
  } else {
    alert(' "You did not become a billionaire, but can." ');
  }
}

function roulette() {
  let round = 1;
  for (let i = 0; i < round; i++) {
    max = max + oneHundred;
    mid = mid + fifty;
    min = min + twentyFive;
    eight = eight + four;
    NumberForRandom = NumberForRandom + four;
    let attempts = 3;
    let total = 0;
    let possible = 100;
    randomNum = Math.floor(Math.random() * NumberForRandom);
    do {
      userNum = parseInt(prompt(`Choose a roulette pocket number from 0 to 8 !
                                  Attempts left: ${attempts}
                                  Total prize: ${total}$
                                  Possible prize on current attempt: ${possible}$`));
    } while (userNum < 0 || userNum > eight || isNaN(userNum));

    if (userNum === randomNum) {
      alert(` "Congratulation, you win! Your prize is: ${max}$." `);
      if (confirm(' "Do you want to continue?" ')) {
        roulette(round++, total + oneHundred, NumberForRandom);
      } else {
        alert(` "Thank you for your participation. Your prize is: ${max}$" `);
        if (confirm(' "Do you want to continue?" ')) {
          roulette(round++, total + oneHundred, NumberForRandom);
        } else {
          alert(` "Thank you for your participation. Your prize is: ${not}$" `);
        }
      }
    } else {
      rouletеeWon2chance(NumberForRandom);
    }
  }
}

//function roulette win finish
//function roulette won2 start
function rouletеeWon2chance() {
  let round = 1;
  let attempts = 2;
  let total = 0;
  let possible = 50;
  let randomNum = Math.floor(Math.random() * NumberForRandom);
  alert(` "Thank you for your participation. Your prize is: ${not}$" `);
  if (confirm(' "Do you want to continue?" ')) {
    do {
      userNum = parseInt(prompt(`Choose a roulette pocket number from 0 to 8 !
                                      Attempts left: ${attempts}
                                      Total prize: ${total}$
                                      Possible prize on current attempt: ${possible}$`));
    } while (userNum < 0 || userNum > eight || isNaN(userNum));
    if (userNum === randomNum) {
      alert(` "Congratulation, you win! Your prize is: ${mid}$." `);
      if (confirm(' "Do you want to continue?" ')) {
        roulette(round++, total + fifty, NumberForRandom);
      } else {
        alert(` "Thank you for your participation. Your prize is: ${mid}$" `);
        if (confirm(' "Do you want to continue?" ')) {
          roulette(round++, total + fifty, NumberForRandom);
        } else {
          alert(` "Thank you for your participation. Your prize is: ${not}$" `);
        }
      }
    } else {
      rouletteWon3chance(NumberForRandom);
    }

  } else {
    alert(` "Thank you for your participation. Your prize is: ${not}$" `);
  }
}

//function roulette won2 finish
//function roulette won3 start
function rouletteWon3chance() {
  let round = 1
  let attempts = 1;
  let total = 0;
  let possible = 25;
  randomNum = Math.floor(Math.random() * NumberForRandom);
  alert(` "Thank you for your participation. Your prize is: ${not}$" `);
  if (confirm(' "Do you want to continue?" ')) {
    do {
      userNum = parseInt(prompt(`Choose a roulette pocket number from 0 to 8 !
                                      Attempts left: ${attempts}
                                      Total prize: ${total}$
                                      Possible prize on current attempt: ${possible}$`));
    } while (userNum < 0 || userNum > eight || isNaN(userNum));
    if (userNum === randomNum) {
      alert(` "Congratulation, you won! Your prize is: ${min}$." `);
      if (confirm(' "Do you want to continue?" ')) {
        roulette(round++, total + twentyFive, NumberForRandom);
      } else {
        alert(` "Thank you for your participation. Your prize is: ${min}$" `);
        if (confirm(' "Do you want to continue?" ')) {
          roulette(round++, total + twentyFive, NumberForRandom);
        } else {
          alert(` "Thank you for your participation. Your prize is: ${not}$" `);
        }
      }

    } else {
      alert(` "Thank you for your participation. Your prize is: ${not}$" `);
    }
  }
}

//function roulette won3 finish
game();