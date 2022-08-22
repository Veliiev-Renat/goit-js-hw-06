const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur',(event)=>{
    const string = event.currentTarget.value
   const value = inputRef.getAttribute('data-length')

    return string.length === value ? inputRef.classList.add('valid') : inputRef.classList.add('invalid')
         
    
 }
)
