let order = [];
let clickOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - amazul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffLerOrder = () => {
  let colorBorder = Math.floor(Math.random() * 4);
  order[order.length] = colorBorder;
  clickOrder = [];

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
