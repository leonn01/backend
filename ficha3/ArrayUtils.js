var obj ={
    isEmpty:function(array){
        return array.length==0;
    },



    max:function(array){
        var Amax=array[0];
        for(var i=0; i< array.length; i++){
            if(array[i]>Amax){
                Amax=array[i];
            }

        }
        return Amax;
       
    },


    min:function(array){
    var min = array[0];
    for (let i = 0; i < array.length; i++){
        if(array[i] > min){
            min=array[i];
        }
    }
    return min;


    },

    average:function(array){
        var num=0;
        var cont=0;
        while(cont<array.length){
            num+=array[cont]
            cont +=1;

        }
        return(num/cont);
    },

    indexOf:function(array,value){
        var indElement= -1;
        for(var i=0; i<array.length;i++){

            if(array[i]==value){

                indElement=i;
            }
           
        }
        return indElement;
    },

    subArray:function(array, startIndex, endIndex){
        novo=[];
       for (let i =startIndex; i<=endIndex; i++) {
           novo.push(array[i])
       }
       return novo;
    
    },

    isSameLength:function(a1,a2){
        var s1=a1.length;
        var s2=a2.length;
        if(s1==s2){
        return true;
        }
        else{ 
        return false;
        }

//return a1.length==a2.length;
    },

    reverse:function(array){

    }




};
module.exports=obj;