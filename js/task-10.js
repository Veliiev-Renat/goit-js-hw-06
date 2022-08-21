function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const conteinerRef = document.querySelector('#boxes')

btnDestroy.addEventListener('click',minuseBox)
btnCreate.addEventListener('click',plusBox)

function valueInput() {
  const value = document.querySelector('[type="number"]').value
  plusBox(value)
}

function plusBox(value){
const size = 30
for (let i = 0; i < value; i++) {
 const divSize = size + i + 10
 const div = document.createElement('div')
  div.style.width = `${divSize}px`
  div.style.height = `${divSize}px`
  div.style.backgroundColor = getRandomHexColor()
 }
 conteinerRef.appendChild(div);
}

function minuseBox(){
  conteinerRef.innerHTML('')
}