const inputForm = document.querySelector('#name-input')
const inputText = document.querySelector('#name-output')

inputForm.addEventListener('input',(event)=>{
    inputText.textContent = event.currentTarget.value
    if(event.currentTarget.value === ''){
        inputText.textContent  = 'Anonymous'
    }
})