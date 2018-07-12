const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '79b54accd32f1ddfa6c3a0afd9cd06d3';
const WEATHER_API_URL =   `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoordinates(location) {
    return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());

}

function getForecast(lat, lng) {
    return fetch(`${WEATHER_API_URL}${lat},${lng}?lang=fr&units=si`)
    .then(response => response.json());
}

function getAdress(lat, lng) {
    return fetch(`${ADRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());

}
function getEmbedURL(lat, lng) {
    return `https://maps.darksky.net/@apparent_temperature,${lat},${lng},11?domain="+encodeURIComponent(window.location.href)+"&auth=1525213550_b5fc128e7789bb56048952cc704c8473&embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=emoji`;
  }
// function getForecast() {
//     console.log(API_URL);
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//     });
// }
export default {
    getForecast,
    getAdress,
    getCoordinates,
    getEmbedURL,
};