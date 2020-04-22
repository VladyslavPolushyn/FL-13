let checknumber, tip_percentage, tip_amount, total_sum;

let max_percent = 100;
let comma = 2;

checknumber = +prompt('Check number:');
tip_percentage = +prompt('Tip percentage:');

if( isNumber(checknumber) && isNumber(tip_percentage) && tip_percentage <= max_percent ) {
	calc(checknumber, tip_percentage);

	alert(`Check number: ${checknumber}\nTip: ${tip_percentage}%\nTip amount: ${tip_amount}\nTotal sum: ${total_sum}`);
}else{
	alert('Invalid input data');
}

function isNumber(input) {
	if( typeof input === 'number' && !isNaN(input) && input >= 0 ){
		return true;
	}else{
		return false;
	}
}

function calc(check, percent) {
	tip_amount = check * percent / max_percent;
	total_sum = check + tip_amount;
	tip_amount.toFixed(comma);
	total_sum.toFixed(comma);
}

