var A={ name:"maria", age:20, gender:"F" }
var jsonA= JSON.stringify(A);
console.log(jsonA);

var str='{"name":"maria","age":"20","gender":"F"}'
var jsonA=JSON.parse(str);
console.log(jsonA.age);
