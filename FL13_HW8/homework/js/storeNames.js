function storeNames() {
	let arr = [];
	for(let i = 0; i < arguments.length; i++) {
		arr.push(arguments[i]);
	}
	return arr;
}

storeNames('Mark Webb', 'Aaron Pol', 'Vlad Pol');