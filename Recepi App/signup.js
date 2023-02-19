const submitE = document.querySelector('#submit')
const usernameE = document.querySelector('.username')
const passwordE = document.querySelector('.password')
const formcontainer = document.querySelector('.form-container')
console.log(usernameE.value
    );
const symbole = ['!','@','#','$','%','^','&','*','_']




submitE.addEventListener('click',()=>{

if(assignloginpage()){
return symbole.forEach((e)=>{
        if(usernameE.value.includes(e)){
            window.location.assign('./login.html')
            localStorage.setItem(usernameE.value,passwordE.value)
        }else{

    div.innerHTML = 'create username using with symbole'
        }
    })
   
}

else{
   
    div.innerHTML = 'please enter a valid value'
formcontainer.insertBefore(div,submitE)
setTimeout(() => {
    div.remove();
}, 1000);
}
   


})

function assignloginpage(){

if(usernameE.value.length >5 && passwordE.value.length >5 ){

  return true;
    
    // console.log('click');
}
return false;
}
// if(username.length >4 && password.length>4){
//     return true;
// }
// return false