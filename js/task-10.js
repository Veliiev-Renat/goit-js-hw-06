function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const conteinerRef = document.querySelector('#boxes')

btnDestroy.addEventListener('click',minuseBox)
btnCreate.addEventListener('click',plusBox)



function plusBox(){
  function valueInput() {
    const valueRef = document.querySelector('[type="number"]').value
    return valueRef
  }
const size = 30
const boxs = []
for (let i = 0; i < valueInput(); i++) {
 const divSize = size + i * 10
 const divRef = document.createElement('div')
 divRef.style.width = `${divSize}px`
 divRef.style.height = `${divSize}px`
 divRef.style.backgroundColor = getRandomHexColor()
  boxs.push(divRef)
 }
 conteinerRef.append(...boxs);
}

function minuseBox(){
  conteinerRef.innerHTML=''
}
  