const marverl =["Thor","ironman","cap"]
const dc = ["batman","sueprman", "flash"]

// marverl.push(dc) // htis appends araay inside an array
// console.log(marverl);

// const allheros=marverl.concat(dc)   // joins them perefect well 
// console.log(allheros);    

// const all = [...marverl,...dc]  // spread operatopr  better than concat
// console.log(all); 

// const array =[1,2,3,[4,5,6],7,[8,9]]  // ot flatten a muitlp dimenisnal array
// console.log(array);
// console.log(array.flat(Infinity));

console.log(Array.isArray("Histehs"));
console.log(Array.from("Hitesh"));  //ineteresing

let score1 =100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3));



