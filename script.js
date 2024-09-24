const apikey = '0402445b5d80b6735e5b261f28dbc85e';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
// q=kasganj&appid=&
const weathericon = document.querySelector(".weather-icon");

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".btn")

async function checkweather(city){
    const responce  = await fetch(apiurl + city + `&appid=${apikey}`);
    if(responce.status == 404){
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else{
        document.querySelector(".error").style.display = 'none';
    }
    
    var data = await responce.json();
    console.log(data.message);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = '/images/clouds.png';
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = '/images/clear.png';
    }
    else  if(data.weather[0].main == "Rain"){
        weathericon.src = '/images/rain.png';
    }
    else  if(data.weather[0].main == "Drizzle"){
        weathericon.src = '/images/drizzle.png';
    }
    else  if(data.weather[0].main == "Mist"){
        weathericon.src = '/images/mist.png';
    }
    document.querySelector(".weather").style.display = "block"
}

searchbtn.addEventListener("click",function(){
   checkweather(searchbox.value);
})

