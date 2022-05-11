
const express = require('express')
const fs= require('fs');

const bodyParser=require('body-parser');


const app = express()
const port = 3000;




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



function readFile(path){
    var fileContent=fs.readFileSync(path,"utf-8");
    return fileContent;
}

console.log(readFile('./persons.json'));

//end point
//responde um pedido HTTP GET
//1ºe rota/path do endpoint
//2º e o codifo que vai ser execuado quando este endpoint for invocado
app.get(
  
  
  '/',//1º

(request, response) => {//º2, isto => e uma abreviaçao para function


  response.send('Hello Worldddddddddddddddd!')
})


app.get('/users', function(request, response) {
   
    response.send(personObject)
  })

  

app.post('/users', function(request, response) {
  //person que vem no body do pedido


//selecionar as chaves de um array e obter o seu tamanho
var size=Object.keys(personObject).length;
size++;

//atribuir o id igual ao tamanho +1
person.id=size;   
//criiar  uma nova chave  por ex: person6 que tera o valor de person que vem no body
personObject['person'+person.id]=person;
//enviar o id da pessoa que foi inserida
    response.send(person.id+"");
  })

app.put('/users', function(request, response) {
   
    response.send("THIS IS A PUT")
  })


  app.delete('/users/:id', function(request, response) {
    var id=request.params.id;
    response.send("this is an id: "+id);

    if (person==undefined){
      response.send("this id does not exist!");

    }
    else{
      delete personObject["persons"+id];
      response.send("this id "+id+ " was deleted");
    }

   })

   app.get('/users/:id', function(request, response) {
    var id=request.params.id;
    response.send("this is an id: "+id);

    if (person==undefined){
      response.send("this id does not exist!");

    }
    else{
      
      response.send(person);
    }

   })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



var person=request.body;
var personString=readFile('./persons.json')
var personObject= JSON.parse(personString)