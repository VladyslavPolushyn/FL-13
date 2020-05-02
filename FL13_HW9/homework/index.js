function convert() {
	let arr = [];
	for(let i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] === 'number') {
			arr.push(`${arguments[i]}`);
		}else {
			arr.push(parseInt(arguments[i]));
		}
	}
	return arr;
}

function executeforEach(arr, callback) {
	for(let value of arr) {
		callback(value);
	}
}

function mapArray(arr, callback) {
	let newArr = [];

	for(let i = 0; i < arr.length; i++) {
		if(typeof arr[i] === 'string') {
			arr[i] = parseInt(arr[i]);
		}
	}

	executeforEach(arr, function(elem) {
		newArr.push(callback(elem));
	});

	return newArr;
}

function filterArray(arr, callback) {
	let newArr = [];

	executeforEach(arr, function(elem) {
		if(callback(elem)){
			newArr.push(elem);
		}
	});

	return newArr;
}

function containsValue(arr, num) {
	let newArr = [];

	executeforEach(arr, function(elem) {
		newArr.push(elem === num);
	});

	if(newArr.includes(true)) {
		return true;
	}
	return false;
}

function flipOver(str) {
	let newStr = '';
	for(let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

function makeListFromRange(arr) {
	let newArr = [];
	if(arr[0] > arr[arr.length-1]) {
		let temp = arr[0];
		arr[0] = arr[arr.length-1];
		arr[arr.length-1] = temp
	}

	for(let i = arr[0]; i <= arr[arr.length -1]; i++) {
		newArr.push(i);
	}

	return newArr;
}

function getArrayOfKeys(arr, key) {
	let newArr = [];

	executeforEach(arr, function(elem){
		newArr.push(elem[key]);
	});

	return newArr;
}

function substitute(arr) {
	let minNum = 10;
	let maxNum = 20
	let newArr = mapArray(arr, function(elem) {
		if(elem > minNum && elem < maxNum) {
			elem = '*';
			return elem;
		}
		return elem;
	});

	return newArr;
}

function getPastDay(someDate, days) {
	let hoursInDay = 24;
	let secondsInHour = 3600;
	let millisecInSec = 1000;
	const dayMilliseconds = hoursInDay*secondsInHour*millisecInSec;
	let newDate = new Date(someDate - dayMilliseconds * days);
	return newDate.getDate();
}

function formatDate(date) {
	let YY = date.getFullYear();
	let MM = date.getMonth() + 1;
	let DD = date.getDate();
	let HH = date.getHours();
	let mm = date.getMinutes();
	let minNum = 10;
	function plusZero(elem) {
		if(elem < minNum) {
			elem = '0' + elem;
		}
		return elem;
	}

	return `${YY}/${plusZero(MM)}/${plusZero(DD)} ${plusZero(HH)}:${plusZero(mm)}`;
}
