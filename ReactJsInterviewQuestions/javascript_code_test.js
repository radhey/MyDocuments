const sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(2)(3)());

/*
genrator function which return a generator object
*/
function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value); //10
console.log(gen.next().value); //20

/*
Clouser function is combination of function bundle which provide to access 
outer scope of function from inner function
*/

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
var addNo2 = makeAdder(5);
console.log(addNo2(3));

/*
Anonymous function are defined without name
*/
var myFunction = function (a, b) {
  return a * b;
};
var x = myFunction(4, 3);

/*
self invoking function called via ()
*/

(function () {
  console.log("hello world");
})();

/*
bind- The bind() method creates a new function that, when called, 
its has this keyword set to the provided value 
*/
var pokemon = {
  firstname: "radhey",
  lastname: "krish",
  getPokeName: function () {
    return this.firstname + "" + this.lastname;
  },
};
var pokemonName = function () {
  console.log(this.getPokeName() + "love you");
};
var logPokeMon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
console.log(logPokeMon());

/*
The call() method calls a function with a given this value and arguments provided individually.
call() and apply() serve the exact same purpose. The only difference between how they work is that
call() expects all parameters to be passed in individually, whereas apply() expects an array of 
all of our parameters.
*/
var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};
var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};
pokemonName.call(pokemon, "chips", "reading books"); // Pika Chu loves chips and reading books
pokemonName.apply(pokemon, ["chips", "reading books"]); // Pika Chu loves sushi and algorithms

/*
Callback: A callback is a function that is passed to another function. 
When the first function is done, it will run the second function.

The problem with callbacks is it creates something called “Callback Hell.” 
Basically, you start nesting functions within functions within functions, 
and it starts to get really hard to read the code.
*/
function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}
printAll();

/*
Promises: 
You wrap the whole function in a Promise, and instead of calling the callback, 
you call resolve (or reject if there is an error). The function returns this Promise object.

Promises try to fix this nesting problem.
*/

function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}
/*
This is called a Promise Chain. You can see that the code returns the result of the 
function (which will be a Promise),and this gets sent to the next function in the chain.
*/
function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"));
}
printAll();

/*
Await: Await is basically syntactic sugar for Promises. It makes your asynchronous code look 
more like synchronous/procedural code, which is easier for humans to understand.

The printString function doesn’t change at all from the promise version.
*/
async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}
printAll();

/*
Functions in JavaScript
First, let's talk about functions in JavaScript. 
There are two ways to define JS functions: declarations and expressions.
*/
// declaration
function addOne(foo) {
  return foo + 1;
}

// expression
var addOne = function (foo) {
  return foo + 1;
};

/* 
Currying function: Currying is a mathematical concept that involves splitting up a function
that takes multiple arguments (params) into a sequence of functions that each take an 
individual argument. 
*/
const sum = function (a) {
  return function (b) {
    return a + b;
  };
};
sum(3)(4);
// curry
const sum = (a) => (b) => a + b;

/*
HOF: Higher order functions are functions that operate on other functions, either by taking 
them as arguments or by returning them. In simple words, A Higher-Order function is a function 
that receives a function as an argument or returns the function as output.
*/
//For example,
Array.prototype.map, Array.prototype.filter;
Array.prototype.reduce;

const arr1 = [1, 2, 3];
const arr2 = arr1.map(function (item, index, arr) {
  return item * 2;
});
console.log(arr2);

//custome HOF example
const strArray = ["JavaScript", "Python", "PHP", "Java", "C"];
function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function (item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log(lenArray);

/*
Prototye inheritenc: In JavaScript, objects have a special hidden property [[Prototype]] 
(as named in the specification), that is either null or references another object. 
That object is called “a prototype”:

When we read a property from object, and it’s missing, JavaScript automatically takes it from 
the prototype. In programming, such thing is called “prototypal inheritance”. 
*/
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal; // (*)
// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true

/*
REST: We have a function that multiples the arguments we pass it and we need to be able 
to pass it any number of arguments.

The rest parameter allows us to pass an indefinite number of parameters to a function 
and access them in an array.

Rest Parameter is collecting all remaining elements into an array .
*/
function myData(...args) {
  console.log(args); // ["Marina",24,"Front-End Developer"]
}
myData("Marina", 24, "Front-End Developer");

/*
Spread:Spread Operator is unpacking collected elements such as arrays into single elements.

The spread operator allows us to spread the value of an array (or any iterable) across 
zero or more arguments in a function or elements in an array (or any iterable).
*/
var myName = ["Marina", "Magdy", "Shafiq"];
var newArr = [...myName, "FrontEnd", 24];
console.log(newArr); // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;

/*
Repetitive characters count program in given string
*/

function getFrequency(string) {
  var freq = {};
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  return freq;
}

getFrequency("Indivisibilities");

//reverse a string
// program to reverse a string

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
const result = reverseString(string);
console.log(result);

//2nd Approach
function reverse(str) {
  return str.split("").reverse().join("");
}

//Factorial program
function fact(x) {
  if (x == 0) {
    return 1;
  }
  return x * fact(x - 1);
}

//findout name of the state who does not have covid patients?
const state = [
  {
    name: "goa",
    Population: 1000,
  },
  {
    name: "maharashtra",
    population: 100000,
  },
  {
    name: "Kerala",
    Population: 1000,
  },
  {
    name: "Delhi",
    population: 100000,
  },
  {
    name: "Kolkata",
    Population: 1000,
  },
  {
    name: "UP",
    population: 100000,
  },
  {
    name: "Sikkim",
    Population: 1000,
  },
  {
    name: "Ladakh",
    population: 100000,
  },
];
const Covid_count = [
  {
    name: "Kolkata",
    patients: 20,
  },
  {
    name: "UP",
    patients: 100,
  },
  {
    name: "Sikkim",
    patients: 10,
  },
  {
    name: "Ladakh",
    patients: 10,
  },
];
const results = state.filter(
  ({ name: id1 }) => !Covid_count.some(({ name: id2 }) => id2 === id1)
);
console.log(results);

//How to filter an array from all elements of another array
var filtered = state.filter(function (e) {
  return this.indexOf(e) < 0;
}, Covid_count);
console.log(filtered);

const unique = (value, index, self) => {
  return self.indexOf(value) == index;
};

const arrSample = [1, 2, 2, 3, 4, 5, "a", "a", "c", "d"];
const uniqueValues = arrSample.filter(unique);
//other option
const uniqueValues = [...new Set(arrSample)];

//Anagram prgram check
var str1 = "radhey";
var str2 = "dhraye";
var anagramflag = false;
if (str1.length == str2.length) {
  anagramflag = true;
}
if (anagramflag) {
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    console.log("this is an anagram");
  }
} else {
  console.log("Not an anagram");
}

//print nubmer every 2seconds using var
for (var i = 0; i <= 10; i++) {
  printNumber(i);
}
function printNumber(i) {
  setTimeout(function () {
    console.log(i);
  }, i * 2000);
}

//Prototypal inheritance
function Mobile() {
  this.a = 10;
}
Mobile.prototype.z = 30;
function Samsung() {
  Mobile.call(this);
  this.b = 20;
}
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

var s = new Samsung();
console.log(s.a);
console.log(s.b);
console.log(s.z);

let object = {
  firstName: "Radhey",
  lastName: "Krishna",
  getIntro: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
let object2 = {
  firstName: "Mohan",
};
object2.__proto__ = object;
console.log(object2.name);

//print a string after every 2 seconds

var print = setInterval(printString, 2000);
function printString() {
  console.log("hello world");
}

//HOC -> A component (HOC) that render another component
//Reuse the code
//Render hijacking
//Props manipulation
//Abstract state
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <p>This info is {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private message dont show</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
ReactDOM.render(
  <AdminInfo isAdmin={true} info={"There are the details"} />,
  document.getElementById("root")
);

//Timer using react hooks
import React, { useState, useEffect } from "react";

export default function Time() {
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div>
      <div>{seconds} S</div>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
