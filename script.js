const inputField = document.getElementById("searchInput");
const submitBtn = document.getElementById("submit-button");
const dataIpAdress = document.querySelector("[data-ip]");
const dataLocation = document.querySelector("[data-location]");
const dataTimezone = document.querySelector("[data-timezone]");
const dataIsp = document.querySelector("[data-isp]");

// function request(e) {
//     e.preventDefault()
//     getInputEntries()    
// }

// function getInputEntries() {    
//     console.log(inputValue)
// }

// function displayOutputvalues() {

// }

class FetchThisOne {
    constructor(ip, location, isp) {        
        this.ip = ip
        this.location = location
        this.isp = isp        
    }

    request(url) {        
        console.log(url)
        fetch(url) //créer fonction pour ajouter https:// avant chaine de caractère
        .then(function(res) {
            if(res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value)
        })
        .catch(function(err) {
            console.log('error')
        })
    }    
}

// const url = inputField.value

const urlToFetch = new FetchThisOne(inputField.value)

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    urlToFetch.request(inputField.value)
})

