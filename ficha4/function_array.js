var array=[]
var f1 =function(){
    console.log("hello world 1")
};
var f2 =function(){
    console.log("hello world 2")
};
var f3 =function(){
    console.log("hello world 3")
};
 
array.push(f1,f2,f3);

for (let i = 0; i < array.length; i++) {
    array[i]();
    
}

array.forEach(element=>{
    element();
     console.log
});
    
