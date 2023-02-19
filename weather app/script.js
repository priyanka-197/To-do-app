const apikey=`4f0c5f237b428cfe861db9dc06e5875a`;


const outputE1 = document.querySelector('.output1')
const imgE = document.querySelector('img')
const btnE = document.querySelector('#btn')
const outputE = document.querySelector('.output')
const inputE = document.querySelector('#input')
const weatherUrl = (location)=>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`

fetchApi('mumbai')
async function fetchApi(location){
const url =await fetch(weatherUrl(location),{origin:'cors'});
const data =await url.json();
console.log(data);

kTOc(data)

}



function kTOc(data){
 const temp = Math.floor(data.main.temp - 273.15)
outputE.innerHTML = temp + 'C'
if(temp>=19){
imgE.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAwFBMVEX////0ciT0fSHyZyTzdiLzbyX0eyLxYyXzdCPybCP7+fP1iiPuhUPyaSP1fh32hSH68OvygS/yqW358+v0hAr67+b2gADzwp/0jSHtXwD3xaf0x8HrrZ/pjXLriWv03dTwUQDxVhHwwbLxXxzzaRrtmG70dADx4tPuyajymXbwml/x0rnztprpjHjqakjvSQDtVRvsbD7oclTpflrrln/tekn208T1agfsoXrqkFvujF3xk2nwi1LuqXTv2sDsqok0TJVlAAACMElEQVR4nO3Yi26iQBiGYTzjubtFFMUCnuqirbpah3Zrvf+72mFQUVt1mviPm833NBhKhswbGIyqaQAAAAAAAAAAAAAAAPB9d07Lbj88tO2WU7hhhvP0PJ24HudOps9Pzo0yOrOJ183tdL3JrHODDOe3u1exaXHnyq+KPf2UEfKmttqOhZv6qoNzFyo72ic7eElbaUckt9kOqLsmtns896GJonXi5FLlMxnlcqqr5tmZW+Fsp6XK1lxFR8fKn8sQLBXvbLNe/qLejL7DcfP5zMZm2t1OzKVfJQtr1yECtjt8i49nGPkjXHjh8yUSmSNHRxKJF+pPBU4vIaVHfW9allyItSQOGR+H6Hr0qu/tcNaYOCRgelq/KJ1mAXFIn4dIlOisTx6SlvLvhFDfmjrLnrSr4HusSRyyZMnk6ZQYo358nbRMRjaZpX5DK5QqSQmVEvkXv2AgEzKgXqua9mhVJLBH8hDttSThlb6DLxMZRHPf1/bcbdXEFv8f2x9eu79iSOftD/f+45ve+Un9t6t+kP4YcquBaValmYa5Cs/6uGaHtv4VCoK1X5HLqPjrIBAnra8awhXE/R4aFxuK/K9qDMW6oli0I8/i2CBULZ5RFUNYONobEYREV0QYGedCjFE0iuqKCM0611yZG429+RvF7dFVXYyiahDGkXpTqBfDkobAd4bNqEAMscfKfu+sLUemacSKy2VN1dwHhr7/84DvU6xNAAAAAAAAAAAAAACA/9tfw2hbMpvNskwAAAAASUVORK5CYII='
}else{
    imgE.src = 'https://image.shutterstock.com/image-vector/cold-weather-icon-260nw-157883522.jpg';
}
outputE1.innerHTML = data.name +':';


console.log(temp);


}


btnE.addEventListener('click',()=>{
    fetchApi(inputE.value)
    inputE.value = ''
    
})
console.log(outputE);