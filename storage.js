var data = {  
  "user":{  
    "nome":  "Claudeixom",
    "email": "claudeixom@fiap.com",
    "coins": {
      "multiCoins": 150,
      "goldCoins": 10
    }
  }
};

var enviar = document.getElementById('enviar')
var limpar = document.getElementById('limpar')

virify();

enviar.addEventListener("click", function(){
  localStorage.setItem('user', JSON.stringify(data));
  virify()
});

limpar.addEventListener("click", function(){
  localStorage.clear();
  virify()
  removeDados()
});

function virify(){
  if(localStorage.getItem('user')){
    let objUser = JSON.parse(localStorage.getItem('user'))
    document.getElementById('usuario').className = 'on'
    console.log('esta aqui', document.getElementById('usuario'))
    addDados(objUser)
  }
}

function saveData(obj){
  localStorage.setItem('user', JSON.stringify(obj));
}

function addDados(obj){
  var nome = obj.user.nome
  var email = obj.user.email
  var multiCoin = obj.user.coins.multiCoins
  var goldCoin = obj.user.coins.goldCoins
  document.getElementById('nome').textContent = nome
  document.getElementById('email').textContent = email
  document.getElementById('multiCoin').textContent = multiCoin
  document.getElementById('goldCoin').textContent = goldCoin
}

function removeDados(){
  document.getElementById('nome').textContent = 'NADA'
  document.getElementById('email').textContent = 'NADA'
  document.getElementById('multiCoin').textContent = 'NADA'
  document.getElementById('goldCoin').textContent = 'NADA'
}

var btnmultcoin = document.getElementById('btnmultcoin')
var btngoldcoin = document.getElementById('btngoldcoin')

btnmultcoin.addEventListener("click", function(e){
  var valorCurso = e.target.dataset.coin
  var valorAtual = JSON.parse(localStorage.getItem('user')).user.coins.multiCoins
  var el = document.getElementById('multiCoin')
  if (valorAtual < valorCurso) {
    document.getElementById('error').className = 'on'
  } else {
    //comprar
    valorCurso = parseInt(valorCurso)
    var resultado = valorAtual - valorCurso
    el.textContent = resultado
    data.user.coins.multiCoins = resultado
    var obj = data
    console.log(data.user.coins)
  }
});

btngoldcoin.addEventListener("click", function(e){
  var valorCurso = e.target.dataset.coin
  var valorAtual = JSON.parse(localStorage.getItem('user')).user.coins.goldCoins
  var el =  document.getElementById('goldCoin')
  
  if (valorAtual < valorCurso) {
    document.getElementById('error').className = 'on'
  } else {
    //comprar
    valorCurso = parseInt(valorCurso)
    var resultado = valorAtual - valorCurso
    el.textContent = resultado
    data.user.coins.goldCoins = resultado
    var obj = data
    console.log(data.user.coins)
    saveData(obj)
  }  
});
