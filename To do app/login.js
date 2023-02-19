const usernameE = document.getElementById('name')
const passwordE = document.getElementById('password')
const genderselectE = document.getElementById('genderselect')
const submitE = document.getElementById('submit')

submitE.addEventListener('click',(e)=>{
e.preventDefault();
submitloginform()
})

function submitloginform(){
localData.forEach((el)=>{
    console.log(el);

    if(el.username == usernameE.value && el.password == passwordE.value){
        window.location.assign('./indxe.html')
        localStorage.setItem('activeuser',usernameE.value)
    }
})
}

const localData = JSON.parse( localStorage.getItem('todosignup'))
console.log(localData)