/*jshint esversion: 6 */


// why we use arrow function coz it will never bind a object exm:

this.a = 60;

function print(){ //all object acces inside functi\on
	this.a = 50;
	console.log("this.a = "+this.a);
}

print();


// Now we show ES6



let Arraypoint = () => {
	console.log("this.a = "+this.a);
};

Arraypoint();






let eye = "eye";

const fire = () => {
   return `bulls-${eye}`;
};



/* Now map */


let points = [10, 20, 30];

// let addOne = function(v){                     ////make it  code complex
// 	return v + 1;
// };

// let addOne = (v) => {                       ////make it  code complex
// 	return v + 1;
// };

let addOne = (v) => v + 1; //more easy last two way


points = points.map(addOne);


console.log(points);







// ex2

let lengths = [3, 7, 5];
let multiple = 8;

const scale = (multiple) => {
  return lengths.map(e => `Scale is : ${e * multiple}`); // TODO fill out the rest;
};

console.log(scale(multiple));






/* New Helper filter method */


// let isPassing = (grade) => {
// 	return grade >= 70;
// };


// let scrores = [10, 30, 55, 70, 80, 90, 90.5];


// let passing = scrores.filter(isPassing);

// console.log("The result upper then 70 data are : " + passing);



// we can write it more easy way = 


let scrores = [10, 30, 55, 70, 80, 90, 90.5];


let passing = scrores.filter(ele => ele >= 70);

console.log("The result upper then 70 data are : " + passing);