//Get calculated days difference from given two dates
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2008, 1, 12);
const secondDate = new Date(2008, 1, 22);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
console.log(diffDays);

var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;
console.log(test()); //undefined

var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //output: array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //output: array 2: length=5 last=j,o,n,e,s

/*output
Aurelio De Rosa

John Doe
*/

console.log("hello" || "world");
console.log("foo" && "bar")(
  /* output
hello
bar
*/

  function () {
    var a = (b = 3);
  }
)();

console.log(b);
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

/* output
3
a defined? false
b defined? true
*/

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}
test();
/* output
undefined
2
*/

var Dog = function (name) {
  this.name = name;
};

Dog.prototype.bark = function () {
  console.log("my name is " + this.name + ", Woof!");
};

var rex = new Dog("rex");

rex.bark();

setTimeout(rex.bark, 1000);

/* output
my name is rex, Woof!
2
my name is , Woof! //print after 1 second
*/

//////////////////////////////////////
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] extract array of even number
var evenNumbers = [];

var findEvenNumbers = function (i) {
  if (i % 2 === 0) console.log(i, "is an even number, adding to array!");
  evenNumbers.push(i);
};

for (var i = 0; i < 10; i++) {
  findEvenNumbers(i);
}

console.log(evenNumbers);
//outputs:
//0 "is an even number, adding to array!"
//2 "is an even number, adding to array!"
//4 "is an even number, adding to array!"
//6 "is an even number, adding to array!"
//8 "is an even number, adding to array!"

const sum = (a) => (b) => b ? sum(a + b) : a;
console(sum(2)(3)());

//nth number of sum
function add(...args) {
  if (args.length === 0) return 0;
  let sum = args.reduce((a, b) => a + b, 0);
  return (...args) => (args.length ? add(sum, ...args) : sum);
}

console.log(add()); // 0
console.log(add(1, 2, 3)()); // 6
console.log(add(1, 2, 3)(4, 5)()); // 15
console.log(add(1)(4)(6)(7)(9)()); // 27

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
////////////////////////////////////////////

//MDN bind() function
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

/*
The call() method calls a function with a given this value and arguments provided individually.
call() and apply() serve the exact same purpose. The only difference between how they work is that
call() expects all parameters to be passed in individually, whereas apply() expects an array of 
all of our parameters.
*/

//call-> functionname.call(obj, functionarguments)
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

/* Arrray Methods*/

[3, 4, 5, 6].at(1); // 4
[3, 4, 5, 6] - pop(); // [3, 4, 5]
[3, 4, 5, 6] - push(7); // [3, 4, 5, 6, 7]
[3, 4, 5, 6] - fill(1); // [1, 1, 1, 1]
[3, 4, 5, 6] - join("-"); // '3-4-5-6'
[3, 4, 5, 6].shift(); // [4, 5, 6]
[3, 4, 5, 6].reverse(); // [6, 5, 4, 3]
[3, 4, 5, 6].unshift(1);
[3, 4, 5, 6].includes(5); // true
[3, 4, 5, 6] - map((num) => num + 6); // [9, 10, 11, 12]
[3, 4, 5, 6] - find((num) => num > 4); // 5
[3, 4, 5, 6] - some((num) => num > 5); //true
[3, 4, 5, 6] - filter((num) => num > 4); // [5, 6]
[3, 4, 5, 6].every((num) => num > 5); // false
[3, 4, 5, 6] - findIndex((num) => num > 4); // 2
[3, 4, 5, 6].reduce((acc, num) => acc + num); //18

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

///////////////////////////////////

//[2,3,2,3,4,1,5,1] each number how many times got repeated
var a = [1, 2, 3, 1, 2, 3, 4];
var map = a.reduce(function (obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});
console.log(map);

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
/////////////////////////////////////////////////////////////////////////////
const people = [
  { name: "Elroy", color: "indigo", age: 36 },
  { name: "Kaitlin", color: "orchid", age: 70 },
  { name: "Malachi", color: "indigo", age: 36 },
  { name: "Alayna", color: "orchid", age: 40 },
  { name: "Federico", color: "silver", age: 35 },
  { name: "Jannie", color: "orchid", age: 60 },
  { name: "Kavon", color: "silver", age: 64 },
  { name: "Braeden", color: "silver", age: 63 },
  { name: "Jarrett", color: "indigo", age: 53 },
  { name: "Bell", color: "orchid", age: 46 },
  { name: "k'Nox", color: "orange", age: 68 },
];

// returns something like below:
/*
{
  "indigo": [
    { "name": "Elroy", "color": "indigo", "age": 36 },
    { "name": "Malachi", "color": "indigo", "age": 36 },
    { "name": "Jarrett", "color": "indigo", "age": 53 }
  ],
  "orchid": [
    { "name": "Kaitlin", "color": "orchid", "age": 70 },
    { "name": "Alayna", "color": "orchid", "age": 40 },
    { "name": "Jannie", "color": "orchid", "age": 60 },
    { "name": "Bell", "color": "orchid", "age": 46 }
  ],
  "silver": [
    { "name": "Federico", "color": "silver", "age": 35 },
    { "name": "Kavon", "color": "silver", "age": 64 },
    { "name": "Braeden", "color": "silver", "age": 63 }
  ],
  "orange": [{ "name": "k'Nox", "color": "orange", "age": 68 }]
}

*/
const gp = people.reduce((groups, item) => {
  const groupArr = groups[item.color] || [];
  groupArr.push(item);
  groups[item.color] = groupArr;
  return groups;
}, {});
console.log(gp);

///////////////////////////////////////////////////////////////////////////////////

//findout name of the state who does not have covid patients?
const states = [
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
const covidstates = [
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
const results = states.filter(
  ({ name: id1 }) => !covidstates.some(({ name: id2 }) => id2 === id1)
);
console.log(results);

//other option
const covidFreeState = states.filter((state) => {
  return !covidstates.some((covidstate) => state.name === covidstate.name);
});

console.log(covidFreeState);

//////////////////////

const myRecord = (states, covidstates) => {
  let output = [];
  output = states.filter((x) => {
    return !covidstates.find((data) => {
      return x.name == data.name;
    });
  });
  return output;
};

function getUnique(obj1, obj2) {
  return obj1.filter(
    (item) => !obj2.some((compareItem) => item.name === compareItem.name)
  );
}
////////////////////////////////////////////////////////////////////////
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

//Find unique element from two array

let res = [5, 6, 8, 2, 1];
let existing = [6, 8, 1];
let mynewres = res.filter(function (ele) {
  return existing.indexOf(ele) == -1;
});
console.log(mynewres);

//////////////////////////////////////
//find not common element in two arrays
const first = [2, 3, 4, 5];
const second = [8, 7, 2, 3];
const spreaded = [...first, ...second];
const notCommonElement = spreaded.filter((el) => {
  return !(first.includes(el) && second.includes(el));
});
console.log(notCommonElement);

/////////////////////////////////////////////////

//array of object sort by acending and decending
obj.sort((a, b) => (a > b ? -1 : 1));

let res = [5, 6, 8, 2, 1];
const sortedArr = res.sort((a, b) => {
  return b - a; //decending and a-b will acending
});
console.log(sortedArr);

//sorting array of object by attribut name
const employee = [
  { name: "rad", sal: "200" },
  { name: "krish", sal: "100" },
];
const sorting1 = employee.sort(function (a, b) {
  return a.sal - b.sal;
});
console.log(sorting1);

const sorting2 = employee.sort((a, b) => (a.sal < b.sal ? -1 : 1));
console.log(sorting2);

//Check strings is Anagram or not
function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("indian", "ndiani");

//print numbers of every2 seconds
const printNumbersForEvery2Sec = (n) => {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 2000);
  }
};
printNumbersForEvery2Sec(10);

//every interval print same number
const printEvery2STheSameNumber = (n) => {
  for (let i = 1; i <= n; i++) {
    setInterval(() => {
      setTimeout(() => {
        console.log(i);
      }, i * 2000);
    }, n * 2000);
  }
};
printEvery2STheSameNumber(3);

//Reduce Helper Uses
//Balance Bracket
function balanceBracket(string) {
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      ++previous;
    }
    if (char === ")") {
      --previous;
    }
    return previous;
  }, 0);
}
console.log(balanceBracket(")(")); //unbalanced
console.log(balanceBracket("(((())))")); //balanced

//Question
//Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
//The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
//Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (obj, desk) {
    if (desk.type === "sitting") {
      ++obj.sitting;
    }
    if (desk.type === "standing") {
      ++obj.standing;
    }
    return obj;
  },
  { sitting: 0, standing: 0 }
);
console.log(deskTypes);

//Question
//Another really hard one! Write a function called 'unique' that will remove all the duplicate values from an array.
//For example, given the following array: var numbers = [1, 1, 2, 3, 4, 4]; Your function should return [1, 2, 3, 4] Hint: Use the 'reduce' and 'find' helpers.

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function (previous, current) {
    if (
      !previous.find(function (prevItem) {
        return prevItem === current;
      })
    ) {
      previous.push(current);
    }
    return previous;
  }, []);
}

unique(numbers);

//Arrow function explanation

const team = {
  names: ["radhey", "krishna"],
  teamName: "Supernova",
  teamSummary: function () {
    return this.names.map(function (name) {
      return `${name} is on ${this.teamName}`;
    });
  },
};
//output will be typeError: can not read property teamName
//to solved the problem need to bind this
const team = {
  names: ["radhey", "krishna"],
  teamName: "Supernova",
  teamSummary: function () {
    return this.names.map(
      function (name) {
        return `${name} is on ${this.teamName}`;
      }.bind(this)
    );
  },
};
//other approach instead of bind this
const team = {
  names: ["radhey", "krishna"],
  teamName: "Supernova",
  teamSummary: function () {
    var self = this; //u can remove this line as well and it it will work by self keyword
    return this.names.map(function (name) {
      return `${name} is on ${self.teamName}`;
    });
  },
};

//solved problem by using arrow function

const team = {
  names: ["radhey", "krishna"],
  teamName: "Supernova",
  teamSummary: function () {
    var self = this; //u can remove this line as well and it it will work by self keyword
    return this.names.map((name) => {
      return `${name} is on ${this.teamName}`; //return `${name} is on ${team.teamName}`;
    });
  },
};

team.teamSummary();

//Enahace Object Literals
const inventory = [
  { title: "Harry Potter", price: 20 },
  { title: "Basic Javascript", price: 35 },
];
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find((book) => title === book.title).price;
    },
  };
}
//2nd option without using function keyword
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => title === book.title).price;
    },
  };
}

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");

//convert array of coordinate in array of object in x and y coordinates
const points = [
  [1, 3],
  [4, 5],
  [7, 8],
];
points.map(([x, y]) => {
  return { x, y };
});
//output : [{"x":1,"y":3},{"x":4,"y":5},{"x":7,"y":8}]

const points = [
  [1, 3],
  [4, 5],
  [7, 8],
];

const coordinates = points.map((point) => {
  return {
    x: point[0],
    y: point[1],
  };
});

console.log(coordinates);

/*Question: Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two. Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:
double([1,2,3])

Output
[2,4,6]*/

const numbers = [1, 2, 3];
const finalResult = [];
function double(numbers) {
  const [number, ...rest] = numbers;
  if (number === undefined) {
    return finalResult;
  } else {
    finalResult.push(number * 2);
    return double([...rest]);
  }
}
console.log(double(numbers));

//Return an indexes of two numbers such that they add upto a given target(9).
//Const nums = [2,7,11,15]
//Output return [0,1];  //because nums[0]+nums[1]
const nums = [2, 8, 11, 7];

var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    const diffIndex = nums.indexOf(diff);
    // "diffIndex !== index" takes care of same index not being reused
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
};
console.log(twoSum(nums, 9));

//Function Generator example
//Def: generator function is function where we can enter and exit multiple times.
//and which iterate over the different type of data structure using loop
//example below
const testingTeam = {
  lead: "alex",
  tester: "bower",
};
const engineeringTeam = {
  testingTeam,
  size: 4,
  department: "Technology",
  manager: "Radhey",
  developer: "Abhi",
  project: "promotion",
};

function* TeamIterator(team) {
  yield team.manager;
  yield team.developer;
  yield team.project;
  const testingTeamGen = testingTeamIterator(team.testingTeam);
  yield* testingTeamGen;
}

function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const teamDetails = [];
for (let name of TeamIterator(engineeringTeam)) {
  teamDetails.push(name);
}
console.log(teamDetails);

//above code make Less line of code by using [Symbol.iterator]: function* (){}
const testingTeam = {
  lead: "alex",
  tester: "bower",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};
const engineeringTeam = {
  testingTeam,
  size: 4,
  department: "Technology",
  manager: "Radhey",
  developer: "Abhi",
  project: "promotion",
};

function* TeamIterator(team) {
  yield team.manager;
  yield team.developer;
  yield team.project;
  yield* team.testingTeam;
}

const teamDetails = [];
for (let name of TeamIterator(engineeringTeam)) {
  teamDetails.push(name);
}
console.log(teamDetails);

//More concise and less line of code of above one

const testingTeam = {
  lead: "alex",
  tester: "bower",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};
const engineeringTeam = {
  testingTeam,
  size: 4,
  department: "Technology",
  manager: "Radhey",
  developer: "Abhi",
  project: "promotion",
  [Symbol.iterator]: function* () {
    yield this.manager;
    yield this.developer;
    yield this.project;
    yield* this.testingTeam;
  },
};

const teamDetails = [];
for (let name of engineeringTeam) {
  teamDetails.push(name);
}
console.log(teamDetails);

//Generatorer function with recurssion

class Comments {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}
const children = [
  new Comments("Good comment", []),
  new Comments("Bad comment", []),
  new Comments("Meh", []),
];
const tree = new Comments("great post", children);
console.log(tree);

// 2nd Approach by Generators recurrsion

class Comments {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}
const children = [
  new Comments("Good comment", []),
  new Comments("Bad comment", []),
  new Comments("Meh", []),
];
const tree = new Comments("great post", children);
const values = [];
for (let value of tree) {
  values.push(value);
}
console.log(values);

//find longest string with repeating characters

var lengthOfLongestSubstring = function (s) {
  // Initialise an array to store the running characters and a longest string length variable
  let currentString = [];
  let longestStringLength = 0;

  // Loop through the provided string
  for (let i = 0; i < s.length; i++) {
    // Attempt to get the current character's position in the current string
    const currentCharacterPosition = currentString.indexOf(s[i]);

    // Check if the current character exists in the current string
    if (currentCharacterPosition !== -1) {
      // Chop the array off after the occurence of the character
      currentString.splice(0, currentCharacterPosition + 1);
    }

    // Add the current character to the array
    currentString.push(s[i]);

    // Store the current string length if bigger than the existing record
    longestStringLength = Math.max(longestStringLength, currentString.length);
  }

  return longestStringLength;
};

//Flatten array in javascript
const flatme = [1, [2, [3, 4, [5]]]];
const flatten = (arr) => {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur);
  }, []);
};

console.log(flatten(flatme)); //output [1, 2, 3, 4, 5]

//How to Flatten JavaScript Object of Unknown Hierarchy
const obj = {
  greetingMessage: "Hello",
  name: {
    first: "John",
    last: "Derry",
  },
  key: null,
  message: "Your residential address is ",
  address: {
    residential: {
      street: "residential street",
      landmark: {
        landmark1: {
          name: "landmark 1",
        },
      },
      zip: "residential zip",
    },
    message1: "Your office address is ",
    office: {
      street: "work street",
      landmark: {
        landmark1: {
          name: "office landmark",
        },
      },
    },
  },
  getMessage: function () {
    return "You have successful print the message";
  },
  key: undefined,
};

const defalteObject = (obj) => {
  const result = [];
  const deflate = (obj) => {
    return Object.keys(obj).forEach((key) => {
      return typeof obj[key] === "object" && obj[key]
        ? deflate(obj[key])
        : typeof obj[key] === "function"
        ? result.push(obj[key]())
        : obj[key]
        ? result.push(obj[key])
        : "";
    });
  };
  deflate(obj);
  return result;
};
const result = defalteObject(obj);
console.log(result);

//Generic deep diff between two objects
// Test case 1

const ob1 = {
  name: "Tokyo",
  age: 25,
  professions: ["Con artist", "Waitress"],
  contactDetails: {
    phone: "12345",
    email: "a@b.com",
  },
};

const ob2 = {
  name: "Denver",
  age: 26,
  professions: ["Con artist", "Waitress"],
  contactDetails: {
    phone: "56789",
    email: "c@d.com",
  },
};
output;
const diffs = {
  name: "Denver",
  age: 26,
  contactDetails: {
    phone: "56789",
    email: "c@d.com",
  },
};
////////////////////////////////////////////
///find object differences with deeper element in array format
function diff(obj1, obj2) {
  const result = {};
  if (Object.is(obj1, obj2)) {
    return undefined;
  }
  // if (!obj2 || typeof obj2 !== 'object') {
  //     return obj2;
  // }
  Object.keys(obj1 || {})
    .concat(Object.keys(obj2 || {}))
    .forEach((key) => {
      if (obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
        result[key] = obj2[key];
      }
      if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
        const value = diff(obj1[key], obj2[key]);
        if (value !== undefined) {
          result[key] = value;
        }
      }
    });
  return result;
}
console.log(diff(obj1, obj2));
////////////////////this is for single level difference findings
let diff = Object.keys(o2).reduce((diff, key) => {
  if (o1[key] === o2[key]) return diff;
  return {
    ...diff,
    [key]: o2[key],
  };
}, {});
console.log(diff);

//////////////////////////////////////////////
const o1 = {
  name: "Tokyo",
  age: 25,
  professions: ["Con artist", "Waitress"],
  contactDetails: {
    phone: "12345",
    email: "a@b.com",
  },
};

const o2 = {
  name: "Denver",
  age: 25,
  professions: ["Con artist", "Waitress"],
  contactDetails: {
    phone: "56789",
    email: "c@d.com",
  },
};

function findDifferences(a, b) {
  let out = {};
  for (let key of Object.keys(a)) {
    // if(Object.hasOwnProperty(b, key)){
    if (typeof a[key] === "string" || typeof a[key] === "number") {
      if (a[key] !== b[key]) {
        out[key] = b[key];
      }
    } else if (Array.isArray(a[key])) {
      for (let i = 0; i < a[key].length; i++) {
        if (a[key][i] !== b[key][i]) {
          out[key] = b[key];
        }
      }
    } else if (typeof a[key] === "object") {
      if (!!findDifferences(a[key], b[key])) {
        out[key] = b[key];
      }
    }
    // }
  }
  return out;
}
console.log(findDifferences(o1, o2));

//////////////////////////////////////
const compareObjects = (obj1, obj2) => {
  const tempObj = {};
  const objKeys = Object.keys(obj2);
  objKeys.forEach((ok) => {
    if (JSON.stringify(obj1[ok]) !== JSON.stringify(obj2[ok]))
      tempObj[ok] = obj2[ok];
  });
  return tempObj;
};

const result = compareObjects(o1, o2);
console.log(result);

///////////////////////////////////////////////

0 == false; // true
0 === false; // false
1 == "1"; // true
1 === "1"; // false
null == undefined; // true
null === undefined; // false
"0" == false; // true
"0" === false; // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory

//output of this Promise
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("My Error");
  })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);
//output is 2
/////////////////////////////
//What’s wrong with the code snippet?
new Promise((resolve, reject) => {
  throw new Error("error");
}).then(console.log);
//solution is catch block is missing and write like below
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .then(console.log)
  .catch(console.error);

//Shallow Copy
/*
  Shallow Copy: When a reference variable is copied into a new reference variable using the assignment operator, 
  a shallow copy of the referenced object is created. In simple words, a reference variable mainly stores the address of 
  the object it refers to. When a new reference variable is assigned the value of the old reference variable, 
  the address stored in the old reference variable is copied into the new one. This means both the old and new reference 
  variable point to the same object in memory. As a result if the state of the object changes through any of the reference 
  variables it is reflected for both. Let us take an example to understand it better.
  */
var employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("Employee=> ", employee);
var newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.

//Deep copy
/*
Deep Copy: Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory 
location for the new object and then assigns the copied members to the new object. In this way, both the objects are 
independent of each other and in case of any modification to either one the other is not affected. Also, if one of 
the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript 
we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.
*/
var employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
