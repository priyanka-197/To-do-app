const active = localStorage.getItem('activeuser')
console.log(active);
getItem().forEach(el => {
    if(el.activeUser == active){
   createE1(el.id,el.content,el.activeUser)}
             
    });


 function createE1(id,content){
     
        
     
    const div1 = document.createElement('div')

 const div = document.createElement('div')


div.classList.add('div')
const div2 = document.createElement('div')


 const element = document.createElement('textarea');
       element.setAttribute('id','textarea1');
      element.value= content;
       const dlt = document.createElement('button')
       dlt.setAttribute('id','dlt')
       dlt.innerHTML= "delete";
      
   const edit = document.createElement('button')
       edit.setAttribute('id','edit')
       edit.innerHTML = 'Edit';

       dlt.addEventListener('click',()=>{
     deleteNote(id,div,div1)

       
      });

      edit.addEventListener('click',()=>{
        console.log('edit');
        element.focus();
        
       })
       element.addEventListener('input',()=>{
        updateNote(id,element.value)
       })
 
    div.appendChild(element)
    div2.appendChild(edit)
    div2.appendChild(dlt)
    
    div.appendChild(div2)
 div1.appendChild(div)
    c1.appendChild(div1)
    return div
  }

function deleteNote(id,div,div1){
    const arr = getItem().filter((e)=>e.id != id)
    setItem(arr);
    div1.removeChild(div)
}
function updateNote(id,content){
    const arr = getItem();
    const target = arr.filter((e)=>e.id == id)[0]
    target.content = content;
    setItem(arr)
    console.log(target);
}



btn.addEventListener('click',()=>{


 
    if(!textarea.value){
        alert('pls notedown a task')
    }else{
    const arr = getItem();
 const obj = {
        id:Math.floor(Math.random()*100000),
        content:textarea.value,
        activeUser:active
    }
    console.log(obj);
    arr.push(obj)

    createE1(obj.id,obj.content,obj.activeUser)
     
     
             
       textarea.value = ''

   
    
     
    

setItem(arr);}}

)
function setItem(arr){ localStorage.setItem('todo-app',JSON.stringify(arr))}

function getItem(){ return JSON.parse( localStorage.getItem('todo-app')||'[]')
}
