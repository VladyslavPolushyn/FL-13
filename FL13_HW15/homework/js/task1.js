function myAssign(targetObj) {
	let tempArr = Object.values(targetObj);

	for(let i = 1; i < arguments.length; i++) {
		tempArr.push(arguments[i]);
	}

	tempArr.forEach(function(elem) {
		for(let index in elem) {
			targetObj[index] = elem[index];
		}
	});

	return targetObj;
}

const paymentsCard = { cash: '100$'};
const creditCard = {limit: '50$', cash: '200$'};
const universalCard = myAssign({}, creditCard, paymentsCard);

// console.log(universalCard);