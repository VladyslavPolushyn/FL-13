function positiveSum(arr) {
	let sum = 0;
	arr.forEach(function(elem) {
		if (elem > 0) {
			sum += elem;
		}
	});
	return sum;
}

positiveSum([0, 3, -5, 7]);