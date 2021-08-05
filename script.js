'use strict';
const rosa = document.querySelector("#rosa")
const sol = document.querySelector("#sol")
const seta = document.querySelector("#seta")


let boxTop = 200
let boxLeft = 200
let cont = 0
let contador = document.createElement('h1')
contador.className = "contador"
let local = document.querySelector("#box")
let imagem = document.querySelector("#imagem")
let info = document.querySelector(".info")
let escolha = document.querySelector(".escolha")
let item = ''
rosa.addEventListener("click", (e)=>{
  imagem.setAttribute('src', './assets/rosa dos ventos.jpg')
  local.classList.remove("hidden")
  escolha.classList.add("hidden")
  info.classList.add('hidden')
  document.body.style.backgroundImage = 'url("./assets/regioes brasil.jpg")';
  document.body.style.backgroundRepeat ="no-repeat"
  document.body.style.backgroundSize = "60%"
  document.body.style.backgroundPosition = "top"
  item = "rosa"
  

})
sol.addEventListener("click", (e)=>{
  imagem.setAttribute('src', './assets/sol teletubies.png')
  local.classList.remove("hidden")
  escolha.classList.add("hidden")
  info.classList.add('hidden')
  document.body.style.backgroundImage = 'url("./assets/cenario sol.jpg")';
  document.body.style.backgroundRepeat ="no-repeat"
  document.body.style.backgroundSize = "90%"
  document.body.style.backgroundPosition = "top"
  item = "sol"

})
seta.addEventListener("click", (e)=>{
  imagem.setAttribute('src', './assets/carrinho.png')
  local.classList.remove("hidden")
  escolha.classList.add("hidden")
  info.classList.add('hidden')
  document.body.style.backgroundImage = 'url("./assets/cidade.jpg")';
  document.body.style.backgroundRepeat ="no-repeat"
  document.body.style.backgroundSize = "50%"
  document.body.style.backgroundPosition = "center"
  document.body.style.backgroundPosition = "top"
  item = "seta"

})


local.style.left = "200px";
local.style.top = "200px"
local.appendChild(contador)
contador.innerText = 0

document.addEventListener('keydown', (event) => {
  let keyName = event.key;
  
  contador.innerText = cont
if((keyName === "w" || keyName === "ArrowUp") && item === "seta"){
  imagem.setAttribute('src', './assets/carrinho.png')
}
if((keyName === "a" || keyName === "ArrowLeft") && item === "seta"){
  imagem.setAttribute('src', './assets/carrinhoEsquerda.png')
}
if((keyName === "s" || keyName === "ArrowDown") && item === "seta"){
  imagem.setAttribute('src', './assets/carrinhoBaixo.png')
}
if((keyName === "d" || keyName === "ArrowRight") && item === "seta"){
  imagem.setAttribute('src', './assets/carrinhoDireita.png')
}
  if(keyName === "c"){
    local.style.left = (boxLeft + 10)+"px"
    local.style.top = (boxTop + 10)+ "px"
    boxTop += 10
    boxLeft += 10
    cont++
  }
  if(keyName === "z"){
    local.style.left = (boxLeft - 10)+"px"
    local.style.top = (boxTop + 10)+ "px"
    boxTop += 10
    boxLeft -= 10
    cont++
  }
  if(keyName === "q"){
    local.style.left = (boxLeft - 10)+"px"
    local.style.top = (boxTop - 10)+ "px"
    boxTop -= 10
    boxLeft -= 10
    cont++
  }
  if(keyName === "e"){
    local.style.left = (boxLeft + 10)+"px"
    local.style.top = (boxTop - 10)+ "px"
    boxTop -= 10
    boxLeft += 10
    cont++
  }
  if(keyName === "ArrowDown" || keyName === 's'){
    local.style.top = (boxTop + 10)+"px"
    boxTop+=10
    cont++
  }
  if(keyName === "ArrowUp" || keyName === 'w'){
    local.style.top = (boxTop - 10)+"px"
    boxTop-=10
    cont++
  }
  if(keyName === "ArrowRight" || keyName === 'd'){
    local.style.left = (boxLeft + 10)+"px"
    boxLeft += 10
    cont++
    console.log(boxLeft + valor)
  }
  
  if(keyName === "ArrowLeft" || keyName === 'a'){
    local.style.left = (boxLeft - 10)+"px"
    boxLeft -= 10
    cont++
  }
  
  
});




