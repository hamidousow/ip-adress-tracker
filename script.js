const inputField = document.getElementById("searchInput");
const submitBtn = document.getElementById("submit-button");

const dataIpAdress = document.querySelector("[data-ip]");
const dataLocation = document.querySelector("[data-location]");
const dataTimezone = document.querySelector("[data-timezone]");
const dataIsp = document.querySelector("[data-isp]");

const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/';

const apiUrl = "https://geo.ipify.org/api/v2/country?apiKey=at_gbpt1y9UojHQQl8zo1L5mOxMGDgDd&ipAddress=";

// const apiUrl = 'https://geo.ipify.org/api/';
const version = 'v1';

const secret_api = 'ENTER_YOUR_API';

const headers_option = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

function getIpInfo(urlToFetch) {      
    
    if(urlToFetch == undefined) {
        var ipUrl = `${bypass_cors_url}${apiUrl}`
    } else {
        var ipUrl = `${bypass_cors_url}${apiUrl}${urlToFetch}`
    }

    fetch(ipUrl, headers_option)
    .then(function(res) {
        console.log(ipUrl)
        return res.json()
    })
    .then(function(value) {
        console.log(value) 
        dataIpAdress.innerHTML = value.ip;
        dataLocation.innerHTML = `${value.location.region}, ${value.location.country}`
        dataTimezone.innerHTML = value.location.timezone;
        dataIsp.innerHTML = value.isp;       
    })
    .catch(function(error) {
        console.log(error)
    })
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()    
    getIpInfo(inputField.value)
    return
})





