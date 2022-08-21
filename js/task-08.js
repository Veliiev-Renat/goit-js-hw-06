const formRef = document.querySelector("form.login-form")


formRef.addEventListener("submit",(event)=>{
    event.preventDefault()
    const email = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value
    const formData = {email,password}
       console.log(formData)  
    if(password === '' || email === ''){
        alert(' Все поля должны быть заполнены')
    }
})
