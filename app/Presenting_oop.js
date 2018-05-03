/*jshint esversion: 6 */

class Entity {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greet(){
		console.log(`Hi I M ${this.name} Form Bangladesh`);
	}
}

let Name = new Entity("Imran", 23);

Name.greet();