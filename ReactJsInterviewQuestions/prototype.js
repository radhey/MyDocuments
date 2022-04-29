function Mobile(){
    this.a = 10;
}
Mobile.prototype.z = 30;
function Samsung(){
    Mobile.call(this);
    this.b=20
}
Samsung.prototype = Object.create(Mobile.prototype)
Samsung.prototype.constructor = Samsung;

var s = new Samsung();
console.log(s.a)
console.log(s.b)
console.log(s.z)

let object = {
    firstName:'Radhey',
    lastName:'Krishna',
    getIntro:function(){
        console.log(this.firstName +" "+this.lastName);
    }
}
let object2={
    firstName:'Mohan'
}
object2.__proto__ = object;
console.log(object2.name);

const add = a => b => b ? add(a+b) : a;
console.log(add(2)(4)(5)())

function addX(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
console.log(addX(2)(3)(5))