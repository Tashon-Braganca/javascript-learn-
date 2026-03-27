//singleton : when we declare them as construcitors 

//object literals:the beloow
Object.create // using construcotr moethod we create the object 
const mysym=Symbol("key1")



const jsuser={
    name:"Hitesh", //the keyvalue pair {name=string(akways)}
    age:21,
    [mysym]:"mykey1",
    location:"Goa",
    email:"hitesh@gamil.com",
    lastlog:["Monday","Saturday"]
}   //creating a basic object


//Accessing the items :
console.log(jsuser.email);      //1st way
console.log(jsuser["email"]);  // seoncd way
console.log(jsuser[mysym]);

jsuser.email="hitesh@gpt.com" // chnage the values
Object.freeze(jsuser) // frezzess the vlaues and doesnt change 

