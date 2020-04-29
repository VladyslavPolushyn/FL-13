let winPoint = 3;

function countPoints(arr) {
	let count = 0;
	arr = scoreToNumber(arr);
	
	for(let i = 0; i < arr.length; i++) {
		for(let k = 0; k < arr[i].length; k++) {
			if(arr[i][k] > arr[i][k+1]) {
				count += winPoint;
			}else if(arr[i][k] === arr[i][k+1]) {
				count += 1;
			}
		}
	}

	return count;
}

function scoreToNumber(arr) {
	for(let i = 0; i < arr.length; i++){
		arr[i] = arr[i].split(':');
		for(let k = 0; k < arr[i].length; k++) {
			arr[i][k] = Number(arr[i][k]);
		}
	}
	return arr;
}

countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']);