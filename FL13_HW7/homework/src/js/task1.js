let user_login = 'User';
let user_pass = 'UserPass';
let admin_login = 'Admin';
let admin_pass = 'RootPass';
let min_letters = 4;
let evening_time = 20;
let day_time = 8;
let current_date = new Date();

let login_input = prompt('Login:');
let pass_input;

if(!login_input) {
	alert('Canceled');
}else{
	if(login_input.length < min_letters) {
		alert(`I don't know any users having name length less than 4 symbols`);
	}else if(login_input !== user_login && login_input !== admin_login) {
		alert(`I don’t know you`);
	}else{
		pass_input = prompt('Password:');
		if(!pass_input) {
			alert('Canceled');
		}else if(pass_input === user_pass) {
			sayHelloToUser(login_input);
		}else if(pass_input === admin_pass) {
			sayHelloToUser(login_input);
		}else{
			alert('Wrong password');
		}
	}
}

function sayHelloToUser(username){
	if(current_date.getHours() < evening_time && current_date.getHours() > day_time) {
		alert(`Good day, dear ${username}`);
	}else{
		alert(`Good evening, dear ${username}`);
	}
}