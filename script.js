const inputField = document.getElementById("searchInput");
const submitBtn = document.getElementById("submit-button");

const dataIpAdress = document.querySelector("[data-ip]");
const dataLocation = document.querySelector("[data-location]");
const dataTimezone = document.querySelector("[data-timezone]");
const dataIsp = document.querySelector("[data-isp]");

const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/';
const apiRequest = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_gbpt1y9UojHQQl8zo1L5mOxMGDgDd&ipAddress=8.8.8.8';

const headersOption = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

getIpInfo = (urlToFetch) => {     

    fetch(`${bypass_cors_url}https://geo.ipify.org/api/v2/country,city?apiKey=at_gbpt1y9UojHQQl8zo1L5mOxMGDgDd&ipAddress=${urlToFetch}`, headersOption)
    .then(results => results.json())
    .then(value  => {
        console.log(value) 
        dataIpAdress.innerHTML = value.ip;
        dataLocation.innerHTML = `${value.location.region}, ${value.location.country}`
        dataTimezone.innerHTML = value.location.timezone;
        dataIsp.innerHTML = value.isp;       
    })
    .catch(error => {
        console.log(error)
    })
}

//localisation marker 

var map = L.map('container-map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

// end localisation

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()   
    if(inputField.value != '' && inputField.value != null) {
        getIpInfo(inputField.value)
    } else {
        alert('veuillez saisir une url ou un ip valide')
    }   
})







