var obj = {
x:1,
y:2,
z:this.x+this.y,
sum: function(){
return this.x+this.y
}
}
var sum = obj.sum;
console.log(sum())
console.log(obj.sum())
//output: NaN 3

let x=1;
let y=10;
let funcSome = ()=>{
x+=y;
y-=x;
}
let funcMul = () =>{
x= x*y;
y=y*x;
}
setTimeout(funcSome,0);
queueMicrotask(funcMul);
console.log(x+y);
//output: 11

var promise = new Promise(function(resolve, reject){
setTimeout(function(){
console.log('resolve 3sec')
},3000);
setTimeout(function(){
console.log('resolve 2sec')
},2000);
})
promise.then(function(successMessage){
console.log(successMessage);
},
function(errorMessage){
console.log(errorMessage);
})
//output: resolve 2sec resolve 3sec

var choice ='E'
switch(choice){
default:
console.log('others');
case 'A':
console.log('A');
case 'B':
console.log('B');
break;
case 'C':
console.log('C');
}
if(choice==='E'){console.log('E')}
//output others A B E

var numberString = '34';
console.log(typeof numberString);
var response = parseFloat(numberString);
console.log(typeof response);
//output: sting number

let map = new Map();
map.set(0,false)
.set(1,1)
.set(2,'two');
var values = map.keys();
var ref = map.values();
var result = values[1]+ref[2];
console.log(result);
//output: NaN

var promise = new Promise(function(resolve, reject){
const a='String';
const b='string';
if(a===b){
resolve();
}else{
reject();
}
});
promise.then(function(){
console.log('Strings are equal');
}).catch(function(){
console.log('Strings are not equal');
});
//output: Strings are not equal 

var str1='Welcome to India';
var regExpStr = str1.search(India/i);
console.log(regExpStr);
var str2='Welcome to India';
var regExpStr1 = str2.search("India");
console.log(regExpStr1)
//output: undefined 11

async function ex(x,y){
let promise = new Promise(function(resolve, reject){
setTimeout(()=>resolve(x>y),5000);
setTimeout(()=>reject(x<y),500);
});
let result = await promise;
console.log(result);
}
console.log(ex(5,10));
console.log(ex(10,5));
//output rejected = > true rejected=> false

var date = new Date('April 31, 2020 06:30:30')
var fetchValue = date.toJSON();
console.log(fetchValue);
//output 2020-05-01T01:00:30.000Z

var x = 1;
let y=2;
function foo() {
  var x = 2;
  bar();
}
function bar() {
  console.log(x); 
}
foo();
//output 1

function foo(){
    let name = 'i am in foo';
    console.log(this);
    return {
      name : 'i am at object',
      f: () => this.name
    };
  };
  console.log(foo().f());
  //output window object

