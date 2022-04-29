//Blocking operations
//execution time taking 4-5 seconds because it will wait for 1st function response then will execute next
const getUser = require("../src/getUser");
const userOne = getUser(1);
console.log(userOne);
const userTwo = getUser(2);
console.log(userTwo);
const sum = 2 + 3;
console.log(sum);

//Non-blocking operation in node js
//execution time taking in 1 seconds because it will not wait for 1st function response
const getUser = require("../src/getUser");
getUser(1, (user) => {
  console.log(user);
});
getUser(2, (user) => {
  console.log(user);
});
const sum = 2 + 3;
console.log(sum);

//////////////////////////////////////
console.log("starting");

setTimeout(() => {
  console.log("2 seconds timer");
}, 2000);

setTimeout(() => {
  console.log("0 seconds timer");
}, 0);

console.log("stopping");
//////////////////////////////////////////
//define a callback async function which will print given num
add(1, 4, (sum) => {
  console.log(sum); //output
});
//callback function
const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};
