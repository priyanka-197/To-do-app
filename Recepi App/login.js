const submitE = document.querySelector('#submit')
const usernameE = document.querySelector('.username')
const passwordE = document.querySelector('.password')
const formcontainer = document.querySelector('.form-container')


submitE.addEventListener('click',()=>{

    const data = localStorage.getItem(usernameE.value)
    console.log(data);
    if(data == passwordE.value){
        window.location.assign('./index.html')
        localStorage.setItem('active',usernameE.value)
    }

})

const data = localStorage.getItem(usernameE.value)
console.log(data);