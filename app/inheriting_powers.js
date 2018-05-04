/*jshint esversion: 6 */


import Entity from './entity';

class Hobbit extends Entity{
	constructor(name, age){
		super(name, age);
	}
}

let Feode = new Hobbit("Gandof", 105);
console.log(Feode);