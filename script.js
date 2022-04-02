let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - amazul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffLeOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  } 
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
      element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
} 

let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

  //Função para o clique do usuário 
  let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeOut(() => {
      createColorElement(color).classList.remove('selected');
      checkOrder();
    }, 250);
  }

//Função que retornar a cor
let createColorElement = (color) => {
  if(color == 0) {
    return green;
  } else if(color == 1) {
    return red;
  } else if(color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

//Função para proximo sinal do jogo
let nextLevel = () => {
  score++;
  shuffLeOrder();
}  

//Função para game Over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo: \nClique no OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert('Bem vindo ao Genesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//Inicio do jogo
playGame();
