const inputField = document.getElementById("searchInput");
const submitBtn = document.getElementById("submit-button");

const dataIpAdress = document.querySelector("[data-ip]");
const dataLocation = document.querySelector("[data-location]");
const dataTimezone = document.querySelector("[data-timezone]");
const dataIsp = document.querySelector("[data-isp]");

const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/';
const api_uri = 'https://geo.ipify.org/api/';
const current_verion = 'v1';
const secret_api = 'ENTER_YOUR_API';

const headers_option = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

function getIpInfo(urlToFetch) {      
    
    if(urlToFetch == undefined) {
        var ipUrl = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}`
    } else {
        var ipUrl = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}&ipAdress=${urlToFetch}`
    }

    fetch(ipUrl, headers_option)
    .then(function(res) {
        console.log(ipUrl)
        return res.json()
    })
    .then(function(data) {
        console.log(data.ip)        
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





