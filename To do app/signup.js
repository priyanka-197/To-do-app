const usernameE = document.getElementById('name')
const passwordE = document.getElementById('password')
const genderselectE = document.getElementById('genderselect')
const submitE = document.getElementById('submit')


submitE.addEventListener('click',(e)=>{
e.preventDefault();
getItem();
const arr = getItem();
const obj = {
    username : usernameE.value,
    password: passwordE.value
}
arr.push(obj)
submitForm(arr)
        



usernameE.value = ''
})
function submitForm(arr){

if(passwordE.value.length < 5  )
{const div = document.createElement('div')
div.innerHTML = 'please create a password more then 5 charactor '
passdiv.appendChild(div)
setTimeout(() => {
    passdiv.removeChild(div)
}, 1000)}

else{
    const div = document.createElement('div')
div.innerHTML = 'succesfully created'
passdiv.appendChild(div)
setTimeout(() => {
    passdiv.removeChild(div)
}, 1000);
if(usernameE.value == ''){

    inpdiv.innerHTML = 'Enter userName'

    setTimeout(() => {
        inpdiv.innerHTML = ''
    }, 1000);
}else{
    window.location.assign('./login.html')
    setItem(arr)
}

   
}








    //  window.location.assign('./indxe.html')
   




 
}


function setItem(arr){

localStorage.setItem('todosignup',JSON.stringify(arr))
}
function getItem(){return JSON.parse( localStorage.getItem('todosignup')||'[]')

}