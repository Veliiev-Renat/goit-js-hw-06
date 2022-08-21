const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur',(event)=>{
    const string = event.currentTarget.value

    if (string.length === 6) {
        return inputRef.classList.add('valid')
    }
    inputRef.classList.add('invalid')
})