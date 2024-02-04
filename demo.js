const container= document.querySelector('.container');
const search= document.querySelector('.search-box button');
const weatherBox= document.querySelector('.weather-box');
const weatherDetails= document.querySelector('.weather-details');
search.addEventListener('click',()=>{
    const API_Key='bc4aa18067d8d8c7e651f6796e124ae4';
    const city=document.querySelector('.search-box input').value;
    if(city=='')
    return ;
fetch('http://api.openweathermap.org/geo/1.0/direct?q=kolkata,19,91&limit=5&appid=bc4aa18067d8d8c7e651f6796e124ae4').then(Response=>Response.json()).then(json=>{
const image=document.querySelector('.weather-box img');
const temperature=document.querySelector('.weather-box .temperature');
const description=document.querySelector('.weather-box .description');
const humidity=document.querySelector('.weather-box .humidity span');
const wind=document.querySelector('.weather-box .wind span');
switch(json.weather[0].main){
    case'clear':
    image.src='scloud.png';
    break;

    case'Rain':
    image.src='light.png';
    break;

    case'wind':
    image.src='wind.png';
    break;
    default:
        image.src='cloudy.png';

}
});

});
