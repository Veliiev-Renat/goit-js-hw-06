const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur',(event)=>{
    const string = event.currentTarget.value
   

    return string.length === +event.target.dataset.length ? inputRef.classList.add('valid') : inputRef.classList.add('invalid')
         
    
 }
)
