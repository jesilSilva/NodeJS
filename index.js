


/*Aqui começa o código de verdade*/ 
var express = require('express')
var app = express()

const path=require('path');
const router = express.Router();
_dirname=path.resolve();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.engine('html', require('ejs').renderFile);

app.get('/',  (req, res) => {
 
res.render(_dirname+'/view/home.html');
})


app.get('/operacao',  function(req,res)  {

 let {numero1, numero2} = req.query;

    var subtracao = numero1 - numero2;
    
     res.send("O resultado da subtração dos número é:"+subtracao);

res.render(_dirname+'/view/home.html');
})

app.post('/operacao',  function(req,res)  {

  var numero1=req.body.numer1;
  var numero2=req.body.numer2;

  var soma = parseInt(numero1) + parseInt(numero2);
    
     res.send("O resultado da soma dos número é:"+soma);

res.render(_dirname+'/view/home.html');
})


app.get("/exercicio",  (req, res) => {
 
res.render(_dirname+'/view/exercicio1.html');
})

app.post('/soma',  function(req,res)  {

numeros = req.body
    var preencherObjeto = Object.values(numeros).reduce( (itemA, itemB) => {
      //A chamada é feita em recursão
        numero1 = parseInt(itemA)
        numero2 = parseInt(itemB)
        return numero1 + numero2
    })
    
    res.send("A soma dos campos é: " +preencherObjeto)
  // preencherObjeto.req.body.cmp1;
   // res.render(_dirname+'/view/exercicio1.html',{cmp1:preencherObjeto});
  
})





app.get("/exercicio2",  (req, res) => {
 
res.render(_dirname+'/view/exercicio2.html');
})

app.get('/sub',  function(req,res)  {

 let {valor1, valor2} = req.query;

    var sub = valor1 - valor2;
    
     res.send("A subtração dos número é:"+sub);
})

app.post('/sub',  function(req,res)  {

  var valor1=req.body.valor1;
  var valor2=req.body.valor2;

  var soma = parseInt(valor1) + parseInt(valor2);
    
     res.send("A soma dos número é:"+soma);

})



app.get("/exer1",  (req, res) => {
 
res.render(_dirname+'/view/Exer1.html');
})

app.post('/resultadoSoma',  function(req,res)  {

valores = req.body
    var formularioCamp = Object.values(valores).reduce( (valor1, valor2) => {
      //A chamada é feita em recursão
        num1 = parseInt(valor1)
        num2 = parseInt(valor2)
        return num1 + num2
    })
    
    res.send("A soma total é: " +formularioCamp)
  
  
})

























app.listen(process.env.port || 3000);
console.log('Running at Port 3000!');

