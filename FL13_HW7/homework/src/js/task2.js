let totalPrize = 0;
let maxAttempts = 3;
let attempts = 3;
let increase = 2;
let highPrize = 100;
let middlePrize = 50;
let lowPrize = 25;
let currentPrize;
let minRange = 0;
let startMaxRange = 5;
let maxRange = startMaxRange;
let currentNumber;
let userNumber;
let playAgain;

let playGame = confirm('Do you want to play a game?');

if(!playGame) {
	alert(`You did not become a billionaire, but can.`);
}else {
	currentNumber = randomNumber(minRange, maxRange);
	
	gameLoop:
	do {

		if(attempts === 3){
			currentPrize = highPrize;
		}else if(attempts === 2) {
			currentPrize = middlePrize;
		}else if(attempts ===1) {
			currentPrize = lowPrize;
		}else{

			alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
			playAgain = confirm(`Do you want to play again?`);

			if(!playAgain) {
				break;
			}else {
				highPrize = 100;
				middlePrize = 50;
				lowPrize = 25;
				attempts = maxAttempts;
				maxRange = startMaxRange;
				totalPrize = 0;
				currentNumber = randomNumber(minRange, maxRange);
				continue gameLoop;
			}

		}

		userNumber = +prompt('Chose a roulette pocket number from ' + `${minRange}` + ' to ' + `${maxRange}` + 
			'\nAttempts left: ' + `${attempts}` + 
			'\nTotal prize: ' + `${totalPrize}` + '$' + 
			'\nPossible prize on current attempt: ' + `${currentPrize}` + '$');

		if(userNumber === currentNumber) {

			totalPrize += currentPrize;

			let win_message = confirm('Congratulation, you won! Your prize is: ' + `${currentPrize}` + '$.' + 
				'\nDo you want to continue?');

			if(!win_message) {
				alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
				playAgain = confirm(`Do you want to play again?`);

				if(!playAgain) {
					break;
				}else {
					attempts = maxAttempts;
					continue gameLoop;
				}

			}else {
				highPrize *= increase;
				middlePrize *= increase;
				lowPrize *= increase;
				maxRange *= increase;
				currentNumber = randomNumber(minRange, maxRange);
				attempts = maxAttempts;
				continue gameLoop;
			}

		}else{
			attempts--
		}

	}while (attempts >= 0);

}

function randomNumber(min, max) {
  let randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
}