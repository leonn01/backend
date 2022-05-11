function imc(peso,altura){
    var calc= (peso/(altura)**2);
    if(calc<18.5){
        return(calc+ ', abaixo do peso');
    }
    else if(calc>=18.5 && calc <25){
        return(calc+ ', no peso normal');
    }
    else if(calc>=25 && calc <30){
        return(calc+ ', encima do peso');
    }
    else if(calc>=30){
        return(calc+ ', obeso');
    }
}

//console.log(imc(80,1.80))

function invertir_frase(frase){
    var divicao=frase.split('');
    var reverso= '';
    for(var i=0; i<divicao.length; i++){
        var palavra= divicao[i];
        for(var j=palavra.length - 1;j>=0;j++){
            var letra=palavra[j];
            reverso+=letra;
        }
        reverso+=" "
    }
    return reverso;
}

//console.log(invertir_frase("Hoje e Domingo"));

function conta_vogais(frase){
    var contador=0;
    for(var i=0; i<frase.length; i++){
        if(frase[i]=='a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' || frase[i]== 'A' || frase[i]== 'E' || frase[i]== 'I' || frase[i]== 'O' || frase[i]== 'U')
        contador+=1;
    }
    return contador
}

//console.log(conta_vogais("hoje e doMingo"))

function repeticao(frase,letra){
    var contador=0;
    for(var i=0; i<frase.length; i++){
        if(frase[i]==letra){
            contador=1;
        }
    }
    return contador
//console.log(repeticao("hoje e domingo","o"))    
}



//tempo_trabalho(8, 0, 0, 9, 1, 1);

function tempo_trabalho(He,ne,se,hs,ns,ss){
    var totaltimeES= he *3600 +me *60 +se;
    var totaltimeSS= hs *3600 +ms *60 +ss;

    var diffinseconds= totaltimeSS-totaltimeES;
    console.log(diffinseconds);
    
    var horas=math.floor(diffinseconds/3600);
    var horasremainder =diffinseconds %3600;

    var minutos= math.floor(horasremainder/60);
    var segundos= horasremainder%60;


  // console.log("trabalhou"+hours+"h:"+minutes+"m:"+seconds+"s:")

}
//----------------------------------------------------------------------------------------------------------------------------
function retangulo (line){
    var line="";
    var width=10;

    for(var i=0; i<width;i++){
        line+="*";
    }
    
    var height=20;
    for(var j=0; j<height;j++){

    }
    
}

//----------------------------------------------------------------------------------------------------------------------------

function box(width,height){
    for(let i=0; i<height; i++){
        var line="";
        for(let j=0; j<width; j++){
            if(i==0|| i==height -1){
                line +="*";
            }
            else{
                line +=" "
            }
        }
    }
    //console.log(line);          
}

//----------------------------------------------------------------------------------------------------------------------------
function automatico(){
    var student={number:204312, grade:25}
    var student1={number:204313, grade:26}
    var student2={number:204314, grade:27}
    var students=[];

    
    students.push(student);
    students.push(student1);
    students.push(student2);
    
}

function listAll(students){
    for (let i = 0; i < students.length; i++) {
        var student= students[i];
        console.log("numner: " +student.number+", grade" + student.grade)
        
    }
}

function bestGrade(students){
    
}


function studentsstats(students,option){
    switch (option) {
        case 1:
            listAll(students)
            
            break;
        case 2:
            bestGrade(students);
    
        default:
            console.log("invalid option")
            break;
    }
}

studentsstats(students, 1);













