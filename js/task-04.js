const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
let counterValue = 0

btnDecrement.addEventListener('click',()=>{
     counterValue += -1
     const value = document.querySelector('#value')
     
     value.textContent = counterValue
})


btnIncrement.addEventListener('click',()=>{
    counterValue += +1

    const value = document.querySelector('#value')
    value.textContent = counterValue
})



