/*jshint esversion: 6 */


// console.log("Hello World!");

// // now check monster slope

// let sllary = 3000;
// console.log(sllary);

// {
// 	let sllary = 28000;
// 	console.log(sllary);
// }

// console.log(sllary);

// // now const


// const a = 1;

// // a = 1*3;

// const array = [1, 2, 3, "I", "M", "R", "A"];
// array.push("N");

// console.log(array);



/* Mastering Template Literals & ES6 Strings : */

// let i = "name",
// p = "home",
// num = 01754099405,
// data = `My ${i} is Imran My ${p} is Barisal`;


// console.log(data);



// function butter(...x) {
//   let a = [1, 2, 3, ...x];
//   return a;
// }

// butter(4, 5, 6);


/* Array Decoration */


// let list = ["Python", "Es6", "React", "vuejs"];

// let[imran, ...opu] = list;

// console.log(imran, opu);


/* Destructuring Assignment - Objects */

let  Gandalf = {magic : true, power: 9, Sword_Skills: false};

let {magic, power, Sword_Skills} = Gandalf; //it's important never forget it's work Gandalf.magic

console.log("Have Gandalf Magic Power : " + magic + "\nThe Power Range : " + power +"\nHave A Sword Skills : " + Sword_Skills);

console.log('\n');

let Thorin_II_Oakenshield = {magic : false, power: 10, Sword_Skills: true};
({magic, power, Sword_Skills} = Thorin_II_Oakenshield); 

console.log("Have Thorin II Oakenshield Magic Power : " + magic + "\nThe Power Range : " + power +"\nHave A Sword Skills : " + Sword_Skills);