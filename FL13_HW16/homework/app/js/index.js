const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const li = document.createElement('li');
const input = document.createElement('input');
const span = document.createElement('span');
const button = document.createElement('button');
const addBtn = document.getElementById('add-btn');
const usersList = document.getElementById('users-list');
const username = document.getElementById('username');

const xhr = new XMLHttpRequest();

xhr.open('GET', baseUrl + '/users');
xhr.send();

xhr.onload = function() {
	if(xhr.status !== 200) {
		console.log(`Error ${xhr.status}: ${xhr.statusText}`);
	}else {
		renderList();
	}
}

xhr.onerror = function() {
	console.log(`Request failed`);
}

addBtn.onclick = function addUser() {
	let body = {
		name: name.value,
		username: username.value
	}
	body = JSON.stringify(body);

	xhr.open('POST', baseUrl + '/users');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(body);

	xhr.onload = function() {
		if(xhr.status !== 201) {
			console.log(`Error ${xhr.status}: ${xhr.statusText}`);
		}else {
			xhr.open('GET', baseUrl + '/users');
			xhr.send();
			xhr.onload = function() {
				if(xhr.status !== 200) {
					console.log(`Error ${xhr.status}: ${xhr.statusText}`);
				}else {
					usersList.innerHTML = '';
					renderList();
				}
			}
		}

	}
}


function renderList() {
	let data = JSON.parse(xhr.response);

	for(let value of data) {
		let liClone = li.cloneNode(true);
		let inputNameClone = input.cloneNode(true);
		let inputUsernameClone = input.cloneNode(true);
		let spanClone = span.cloneNode(true);
		let buttonUpdateClone = button.cloneNode(true);
		let buttonDeleteClone = button.cloneNode(true);

		spanClone.innerHTML = value.id;
		spanClone.classList.add('span-id');
		inputNameClone.value = value.name;
		inputUsernameClone.value = value.username;
		buttonUpdateClone.innerHTML = 'Update';
		buttonDeleteClone.innerHTML = 'Delete';

		liClone.append(spanClone, inputNameClone, inputUsernameClone, buttonUpdateClone, buttonDeleteClone);

		usersList.append(liClone);
	}

	let editBtnArr = document.querySelectorAll(`button`);
	// let deleteBtnArr = document.querySelectorAll(`button[value='Delete']`);

	editBtnArr.forEach(function(elem){

		if(elem.innerHTML === 'Update') {
			elem.onclick = function() {

				let updateName = this.parentElement.childNodes[1].value;
				let updateUsername = this.parentElement.childNodes[2].value;

				let body = {
					name: updateName,
					username: updateUsername
				}

				body = JSON.stringify(body);

				xhr.open('PUT', baseUrl + '/users/:userId');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.send(body);

				xhr.onload = function() {
					if(xhr.status !== 204) {
						console.log(`Error ${xhr.status}: ${xhr.statusText}`);
					}else {
						xhr.open('GET', baseUrl + '/users');
						xhr.send();
						xhr.onload = function() {
							if(xhr.status !== 200) {
								console.log(`Error ${xhr.status}: ${xhr.statusText}`);
							}else {
								usersList.innerHTML = '';
								renderList();
							}
						}
						console.log('good');
					}
				}

			} 
		}else {
			// elem.onclick = function() {

			// 	xhr.open('DELETE', baseUrl + '/users/:userId');
			// 	xhr.setRequestHeader('Content-Type', 'application/json');
			// 	xhr.send();

			// 	xhr.onload = function() {
			// 		if(xhr.status != 204) {
			// 			console.log(`Error ${xhr.status}: ${xhr.statusText}`);
			// 		}else {
			// 			usersList.innerHTML = '';
			// 			renderList();
			// 		}
			// 	}
			// }
		}


	});



	console.log(data);
}