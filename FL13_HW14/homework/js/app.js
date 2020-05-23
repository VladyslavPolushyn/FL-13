// Your code goes here
let Student = function (name, mail) {

	this._name = name;
	this._email = mail;
	this._homeworkResults = [];
	this.getName = function() {
		return this._name;
	}
	this.getEmail = function() {
		return this._email;
	}
	this.addHomeworkResult = function(topic, success) {
		this._homeworkResults.push({topic : topic, success : success});
	}
	this.getHomeworkResults = function() {
		return this._homeworkResults;
	}

}

const vlad = new Student('Vlad', 'pol@gmail.com');
vlad.addHomeworkResult('HTML', true);
vlad.addHomeworkResult('JS', true);
vlad.addHomeworkResult('JAVA', false);
vlad.addHomeworkResult('CSS', true);
vlad.addHomeworkResult('C#', false);

const jenny = new Student('Jenny', 'jenny@gmail.com');
vlad.addHomeworkResult('HTML', false);
vlad.addHomeworkResult('JS', false);
vlad.addHomeworkResult('JAVA', false);
vlad.addHomeworkResult('CSS', true);
vlad.addHomeworkResult('C#', false);

const ruslan = new Student('Ruslan', 'geylord@gmail.com');
vlad.addHomeworkResult('HTML', true);
vlad.addHomeworkResult('JS', true);
vlad.addHomeworkResult('JAVA', true);
vlad.addHomeworkResult('CSS', true);
vlad.addHomeworkResult('C#', false);


// let FrontendLab = function(students, failedLimit) {

// }