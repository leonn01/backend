/*
//i mplementaçao 
function calcular (notaP,notaT){
    var nota = 0.7 * notaP + 0.3 *notaT
    console.log("a nota final e:"+nota)
    if(nota < 9.5 ){
        console.log("reprovado")
    }
    else{
    console.log("aprovado")
    }
}

//invocaçao 
calcular(12,2);

*/



/*
function nomemes(nummes){
    if(nummes == 1){
        console.log("janeiro")
    }
    else if(nummes ==2){
        console.log("fevereiro")
    }
    else if(nummes ==3){
        console.log("março")   
    }
    else if(nummes ==4){
        console.log("abril")
    }
    else if(nummes ==5){
        console.log("maio")
    }
    else if(nummes ==6){
        console.log("junho")
    }
    else if(nummes ==7){
        console.log("julho")
    }
    else if(nummes ==8){
        console.log("agosto")
    }
    else if(nummes ==9){
        console.log("setembro")
    }
    else if(nummes ==10){
        console.log("outubro")
    }
    else if(nummes ==11){
        console.log("novembro")
    }
    else if(nummes ==12){
        console.log("dezembro")
    }
}

nomemes(2);
*/

//segunda forma de fazer o exercicio dos meses

/*
function mesnome(numeromes){
    var mes=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
    return mes[numeromes -1];
}
/*



/*
function operaçao (num1,num2,operador){
    if(operador=="+"){
        resultado=num1+num2
        console.log(resultado)
    }
    else if(operador=="-"){
        resultado=num1-num2
        console.log(resultado)
    }
    else if(operador=="*"){
        resultado=num1*num2
        console.log(resultado)
    }
    else if(operador=="^"){
        resultado=num1**num2
        console.log(resultado)
    }

}

operaçao(3,2,"+");

*/


/*
function multiplode(multiplo,limite){
    var result =0;
    while(result <limite){
        result+=multiplo;
        console.log(result);
    }
}
multiplode(5,20);
*/

/*
function sum (value){
    var s= 0;
    for(var i=1; i<=value ;i++){
        s+=i;
    }
    return s;

}
var s=sum(100);
 
*/
function multiplode(limite){
    var result =0;
    while(result <limite){
        result+1;
        console.log(result);
    }
}
multiplode(100);