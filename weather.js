const Coords = 'coords',
    api_key = 'add2ea7eb89b62410e85d933d69874d9',
    weather = document.querySelector('.js-weather');

function getweather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        const temp= json.main.temp,
            place = json.name;
        weather.innerText = `${temp} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(Coords , JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude,
        coordsObj = {
            latitude, //key=value? 축약 속성? 
            longitude
        };
    saveCoords(coordsObj);
    getweather(latitude, longitude);
}
function handleGeoEorror(){
    console.log('can not access Geo. location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoEorror)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(Coords);
    if (loadedCoords === null){ 
        askForCoords();
    } else{ 
        const parseCoords = JSON.parse(loadedCoords);
    getweather(parseCoords.latitude, parseCoords.longitude);
    }
}










function init(){
    loadCoords();
}
init();