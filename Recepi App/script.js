const meals = document.getElementById('meal')
const meale1 = document.querySelector('.meals')
const active = localStorage.getItem('active') 
console.log(active);

 getrandommeal()
  async function getrandommeal(){ 
     
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
   const randommeal = await resp.json();
   const nwmeal = randommeal.meals;
   
  nwmeal.forEach((e)=>addMeal(e))
 }
async function getmealbyid(id){
const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
}
async function getmealbysearch(term){
const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
const data = await resp.json();
const searchdata = data.meals
meals.innerHTML = ''
searchdata.forEach((e)=> addMeal(e))
console.log(data)
console.log(data.meals)
// addMeal(data)


 }

getItem().forEach((el)=>{
    if(active == el.aciveUser){

    addfavmeal(el.img,el.alt,el.id,el.aciveUser)}
})



function addMeal(mealdata){

    const meal = document.createElement('div')
    meal.classList.add('meal');
    meal.innerHTML = ` <div class="mealheader"> your Recepi
  
    <img src='${mealdata.strMealThumb
    }' alt="${mealdata.strMeal
     }">
 </div>
 <div class="mealbody">
     <h4>${mealdata.strMeal
   }</h4>
     <button class = fav-btn ><i class="fa-regular fa-heart"></i>
       </button>
</div>`;

const btn = meal.querySelector('.mealbody .fav-btn');
btn.addEventListener('click',()=>{
    const mealids = getItem();

  const obj =   {
        img:mealdata.strMealThumb,
         alt : mealdata.strMeal,
         id: mealdata.idMeal,
         aciveUser : active
     }
     mealids.push(obj)
  
btn.classList.toggle('active')


addfavmeal(obj.img,obj.alt,obj.id,obj.aciveUser)

setItem(mealids);
})
 meals.appendChild(meal)

}
async function addfavmeal(img,alt,id){
    const resp2 = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const randommeal2 = await resp2.json();
    console.log(randommeal2)
const li = document.createElement('li');
li.innerHTML = `<img id = 'img'src="${img}">
<span id ='span'>${alt}</span>
<button class ='libtn'>X</button>`
const favmeals = document.querySelector(".favmeals");
favmeals.appendChild(li)
btnli = li.querySelector('#img')
btnli.addEventListener('click',()=>{
   
    
 const favcontainer = document.querySelector('.favcontainer')   
const div = document.createElement('div')
div.innerHTML = `    <ul >
<li>${randommeal2.meals[0].strIngredient5}</li>
<li>${randommeal2.meals[0].strIngredient1}</li>
<li>${randommeal2.meals[0].strIngredient2}</li>
<li>${randommeal2.meals[0].strIngredient3}</li>
<li>${randommeal2.meals[0].strIngredient4}</li>
</ul>
<button class ='ingradeBtn'>X<button>`

div.querySelector(".ingradeBtn").addEventListener('click',()=>{
    favcontainer.removeChild(div)
})
favcontainer.appendChild(div)
})
li.querySelector('.libtn').addEventListener('click',()=>{
    console.log('v')
    removefavmeal(id,li,favmeals)
})


}

function removefavmeal(id,li,favmeals){
 const mealids =   getItem().filter((e)=>e.id !== id)
    localStorage.setItem('mealids',JSON.stringify(mealids))
    favmeals.removeChild(li)

}

function setItem(mealids){
localStorage.setItem('mealids',JSON.stringify(mealids))
}


 function getItem(){
return JSON.parse(localStorage.getItem('mealids')||"[]")
}
search.addEventListener('click',()=>{
  

   search = input.value;
   console.log(search)
    getmealbysearch(search);


    input.value = '';
}
)
