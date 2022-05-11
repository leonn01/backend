function Person (firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    
}
Person.prototype.greet=function(){
    console.log("Hello"+ this.firstName+" "+this.lastName)
}

Person.prototype.age=null;
var jhon =new Person("Jhon","Doe");

jhon.age=24;
jhon.greet();

var jane =new Person("Jane","Doe");
jane.age=26;

jane.greet();

console.log(jhon.__proto__);
console.log(jane.__proto__);
console.log(jhon.__proto__==jane.__proto__);