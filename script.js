const key = "7ab337a3e7882875614b9dcc9f402b4a"

function putOnScreen(dice){
    document.querySelector(".city").innerHTML = "Tempo em " + dice.name;
    document.querySelector(".temp").innerHTML = Math.floor(dice.main.temp) + "°C";
    document.querySelector(".forecast-text").innerHTML = dice.weather[0].description;
    document.querySelector(".humidity-text").innerHTML = "Humidade: " + dice.main.humidity + "%";
    document.querySelector(".forecast-img").src  = `http://openweathermap.org/img/wn/${dice.weather[0].icon}.png`;
}

async function searchCity(city){
    const dice = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    putOnScreen(dice);
}

function clickButton(){
    const city = document.querySelector(".city-input").value;

    searchCity(city);
}

