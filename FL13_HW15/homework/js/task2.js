function Vehicle(color, engine, model='unknown model') {
	let maxSpeed = 70;
	let currentSpeed = 0;
	let currentMaxSpeed;
	let isStop = false;

	this.maxSpeed = maxSpeed;
	this.color = color;
	this.engine = engine;
	this.model = model

	this.getInfo = function () {
		return {
			engine: this.engine,
			color: this.color,
			maxSpeed: maxSpeed,
			model: this.model
		}
	}

	this.upgradeEngine = function(newEngine, maxSpeed) {
		this.engine = newEngine;
		this.maxSpeed = maxSpeed;
	}

	this.drive = function(){
		isStop = false;

		function driveFunc() {
			if(!isStop) {
				currentSpeed += 20;
				currentMaxSpeed = currentSpeed;
				console.log(currentSpeed);
				if(currentSpeed >= maxSpeed) {
					console.log('speed is too high, SLOW DOWN!');
				}
			}else {
				clearInterval(driving);
			}
		}

		let driving = setInterval(driveFunc, 2000);

	}

	this.stop = function(){
		isStop = true;

		function stopFunc() {
			currentSpeed -= 20;
			console.log(currentSpeed);

			if(currentSpeed <= 0) {
				currentSpeed = 0;
				console.log(`${this.model} is stopped. Maximum speed during the drive was ${currentMaxSpeed}.`);
				clearInterval(stopping);
			}

		}

		let stopping = setInterval(stopFunc, 1500);

	}

}

function Motorcycle() {
	Vehicle.apply(this, arguments);
	let maxSpeed = 90;
	this.maxSpeed = maxSpeed;

	let parentDrive = this.drive;
	let parentStop = this.stop;

	this.drive = function() {
		console.log(`Let's drive`);
		parentDrive.call(this);
	}

	this.stop = function () {
		parentStop.call(this);
	}

}

function Car() {
	Vehicle.apply(this, arguments);
	let maxSpeed = 80;
	this.maxSpeed = maxSpeed;

	let parentDrive = this.drive;
	let parentStop = this.stop;

	this.drive = function() {
		console.log(`Let's drive`);
		parentDrive.call(this);
	}

	this.stop = function () {
		parentStop.call(this);
	}
	
}

const yamaha = new Motorcycle('Blue', 'Moto2000', 'Yamaha');



