const API_KEY = "8200f6c0c3a65b9a93b1e7e3f387cd2b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        const weather = document.querySelector("#weather div span:first-child");
        const temp = document.querySelector("#weather div span:last-child");
        const city = document.querySelector("#weather > span");
        weather.innerText = `${data.weather[0].main}` ;
        temp.innerText = `${data.main.temp}`
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you/");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
