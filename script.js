const inputField = document.getElementById("searchInput");
const submitBtn = document.getElementById("submit-button");

const dataIpAdress = document.querySelector("[data-ip]");
const dataLocation = document.querySelector("[data-location]");
const dataTimezone = document.querySelector("[data-timezone]");
const dataIsp = document.querySelector("[data-isp]");

const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/';
const apiRequest = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_gbpt1y9UojHQQl8zo1L5mOxMGDgDd&ipAddress=8.8.8.8';

const headers_option = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

getIpInfo = (urlToFetch) => {      
    
    if(urlToFetch == undefined) {
        var ipUrl = `${bypass_cors_url}${apiRequest}`
    } else {
        var ipUrl = `${bypass_cors_url}${apiRequest}&ipAddress=${urlToFetch}`
    }

    fetch(ipUrl, headers_option)
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

const map = L.map('container-map', {
    'center': [0,0],    
    'zoom': 25,
    'layers': [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
    ]    
})

updateMarker = (update_marker = [-25, 25]) => {
    map.setView(update_marker, 13); //first longitude & latitude, second paramater is the zoom level
    L.marker(update_marker).addTo(map);
}

// end localisation

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()   
    if(inputField.value != '' && inputField.value != null) {
        getIpInfo(inputField.value)
    } else {
        alert('veuillez saisir une url ou un ip valide')
    }   
})





