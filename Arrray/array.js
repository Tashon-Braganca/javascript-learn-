// array 
//a rray is resizeable 
// cannot be accessed via arbitary stringsg

const myArray = [0,1,2,3,4,5,true,"Tashon"] //initnalise an array
console.log(myArray);
console.log(myArray.length);

// Array methods

// myArray.push(6)
// myArray.pop()
// myArray.unshift(110);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(1));

const newArr = myArray.join()

console.log(newArr);


//slicenad splice

console.log("A ",myArray);
const myn1= myArray.slice(1, 3)
console.log(myn1);

console.log("B ", myArray);


console.log("C ",myArray);
const myn2= myArray.splice(1, 3) // just filters out the range and serepates it 
console.log(myn2);


console.log(myArray);







