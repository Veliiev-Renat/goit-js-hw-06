const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRef.addEventListener('input',(event)=>{
    const value = event.currentTarget.value
    textRef.style.fontSize = `${value}px`
})
