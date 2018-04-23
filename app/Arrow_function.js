/*jshint esversion: 6 */


// why we use arrow function coz it will never bind a object exm:

this.a = 60;

function print(){ //all object acces inside function
	this.a = 50;
	console.log("this.a = "+this.a);
}

print();


// Now i show ES6



let Arraypoint = () => {
	console.log("this.a = "+this.a);
};

Arraypoint();






let eye = "eye";

const fire = () => {
   return `bulls-${eye}`;
};

