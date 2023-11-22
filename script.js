const apiKey= '038dcd7593c83dfbd3fdb86f686f4a33';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const icon = document.querySelector(".icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();



    if(response.status==404 || response.status==400)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"kmph";


    if(data.weather[0].main == 'Clouds')
    icon.src = "images/clouds.png";

    else if(data.weather[0].main == 'Clear')
    icon.src = 'images/clear.png';

    else if(data.weather[0].main == 'Rain')
    icon.src = 'images/rain.png';

    else if(data.weather[0].main == 'Drizzle')
    icon.src = 'images/drizzle.png';

    else if(data.weather[0].main == 'Mist')
    icon.src = 'images/mist.png';






}


function pre()
{
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
}





searchbtn.addEventListener("click",()=>
{
    pre();
    checkWeather(searchinput.value);
})

