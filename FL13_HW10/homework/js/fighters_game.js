class Fighter {
	constructor(obj) {
		this._name = obj.name;
		this._damage = obj.damage;
		this._hp = obj.hp;
		this._strength = obj.strength;
		this._agility = obj.agility;
		this._maxhp = obj.hp;
		this._wins = 0;
		this._losses = 0;

		this.getName = function() {
			return this._name;
		}

		this.getDamage = function() {
			return this._damage;
		}

		this.getHealth = function() {
			return this._hp;
		}

		this.getStrength = function() {
			return this._strength;
		}

		this.getAgility = function() {
			return this._agility;  	
		}

		this.getMaxHp = function() {
			return this._maxhp;
		}

		this.atack = function(oponent) {
			let maxChance = 100;
			let chance = (maxChance - ( oponent.getStrength() + oponent.getAgility() ) ) / maxChance;
			let rand = Math.random();

			if(chance > rand) {
				oponent.dealDamage( this.getDamage() );
				console.log(`${this.getName()} makes ${this.getDamage()} damage to ${oponent.getName()}`);
			}else {
				console.log(`${this.getName()} atack missed`);
			}	
		}

		this.heal = function(hp) {
			if(this.getHealth() + hp >= this.getMaxHp()) {
				this._hp = this.getMaxHp();
			}else {
				this._hp = this.getHealth() + hp;
			}
		}

		this.dealDamage = function(hp) {
			if(this.getHealth() - hp <= 0) {
				this._hp = 0;
			}else {
				this._hp = this.getHealth() - hp;
			}
		}

		this.logCombatHistory = function() {
			console.log(`Name: ${this.getName()}, Wins: ${this._wins}, Losses: ${this._losses}`);
		}

		this.addWin = function() {
			++this._wins;
		}

		this.addLoss = function() {
			++this._losses;
		}

		this.isDeath = function() {
			if(this.getHealth() === 0) {
				return true;
			}
			return false;
		}


		return this.obg;
	}

}

// const lee = new Fighter({name: 'Bruce Lee', damage: 30, hp: 95, strength: 21, agility: 23}); 
// const tsoi = new Fighter({name: 'Victor Tsoi', damage: 25, hp: 100, strength: 25, agility: 20});

function battle(fighter1, fighter2) {

	if(fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
		do {

			fighter1.atack(fighter2);

			if(fighter2.isDeath()) {
				break;
			}

			fighter2.atack(fighter1);

			if(fighter1.isDeath()) {
				break;
			}

		}while( fighter1.getHealth() > 0 || fighter2.getHealth() > 0 );

		if( fighter1.getHealth() > fighter2.getHealth() ) {
			console.log(`${fighter1.getName()} has won!`);
			fighter1.addWin();
			fighter2.addLoss();
		}else {
			console.log(`${fighter2.getName()} has won!`);
			fighter2.addWin();
			fighter1.addLoss();
		}
	}else if(fighter1.getHealth() === 0) {
		console.log(`${fighter1.getName()} is dead and can't fight.`);
	}else {
		console.log(`${fighter2.getName()} is dead and can't fight.`);
	}

}
