const container = document.getElementById("container");
const randomButton = document.querySelector('#randColor');
const blackButton = document.querySelector('#black');
const eraseButton = document.querySelector('#erase');
const clearButton = document.querySelector('#clear');
const changeButton = document.querySelector('#dimensions');

let random = false;
let color = "black";
let dimensions = 8;
createGrid(dimensions);

//randomButton.addEventListener('click', randomClick);
//blackButton.addEventListener('click', blackClick);
//eraseButton.addEventListener('click', eraseClick);
clearButton.addEventListener('click', clearClick);
changeButton.addEventListener('click', changeClick);

function createGrid(boxes){
    debugger;
    for(i=0; i<boxes*boxes; i++){
        const div = document.createElement('div');
        div.setAttribute=('id', 'box');
        div.addEventListener("mouseover", changeColor);
        div.style.width = container.clientWidth/boxes + 'px';
        div.style.height = container.clientHeight/boxes + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.margin = '0px';
        div.style.padding = '0px';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        container.appendChild(div);
  }
}

function changeClick(){
    clearGrid();
    dimensions = prompt("Enter dimensions (one number - up to 64):");
    createGrid(dimensions);
    color = 'black';
  }

function changeColor(){
    if(random){
      color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    }
    this.style.backgroundColor = color;
  }
  
  function clearGrid(){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
  }
  
  function clearClick(){
    clearGrid();
    createGrid(dimensions);
  }