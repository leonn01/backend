function started(){
    console.log( "started download")
}

function update(progess){
    console.log(progess+"% of download")
    
}

function completed(){
    console.log( "Finish download")
}

function performDownload(started,update,completed){
    started();
    for(var i=0; i<=100; i++){
        update(i);
    }
    completed();

}

var arrayUtils=require("./ArrayUtils.js")
var array =[];
arrayUtils.isEmpty(array)
array=[1,3,4,5,6,7,8,9,9,9];
nodeprformDownload(started, update, completed);
console.log(arrayUtils.subArray(array,1,6))