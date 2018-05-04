/*jshint esversion: 6 */

class Entity {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greet(){
		console.log(`Hi I M ${this.name} Form Bangladesh`);
	}

	all_info(){
		console.log(`name : ${this.name} Age : ${this.age}`);
	}
}

export default Entity;