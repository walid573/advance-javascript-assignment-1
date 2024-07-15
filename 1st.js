
// 1
function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";  
      const constVariable = "I am const";
    }
    console.log(varVariable); // output I am var
    // console.log(letVariable); // getting error
    // console.log(constVariable); // getting error
  }
  
  scopeTest();



//2
  function greet(name) {
    console.log("Hello, " + name + "!"); //Hello, Alice!
    console.log("Good morning," + name)//Good morning,Bob
  }
greet("Alice")

greet("Bob")

//3

const sum = (function() {
    return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
    };
    })();
    console.log(sum(1,2,3)); // 6
    console.log(sum(10,20,30,40)); //100
    console.log(sum(5)); //5
    
//4


const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

const mergedArray = [...array1,...array2,...array3];

console.log(mergedArray) //[1,2,3,4,5,6,7,8,9]
    


//5
const name1 = "John";
const age1 = 30;

const greeting = `Hello, I'm ${name1} and I am ${age1} years old.`;

console.log(greeting); //Hello, I'm John and I am 30 years old.


//6 

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit); //apple banana cherry
}

//7

const name2 = "Alice";
const age2 = 25;

const greeting1 = `My name is ${name2} and I am ${age2} years old.`;

console.log(greeting1); //My name is Alice and I am 25 years old.


// 8 

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const grades of students ) {
    console.log(grades);  //{ name: 'Alice', grade: 90 } { name: 'Bob', grade: 85 } { name: 'Charlie', grade: 92 }
}


// 9 

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let sum1 = 0;
for(let i=0;i<nestedArrays.length;i++){
  for(let j=0;j<nestedArrays[i].length;j++){
    sum1 +=nestedArrays[i][j];
  }
}

console.log(sum1); //45


//10
const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); //The sum of 5 and 10 is 15.





