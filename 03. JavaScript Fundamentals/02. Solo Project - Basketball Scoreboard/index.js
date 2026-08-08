let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")


let home = 0
let guest = 0

homeEl.textContent = home
guestEl.textContent = guest

function highlight () {
    if (home > guest) {
        homeEl.style.color = 'green';
        guestEl.style.color = 'inherit';
    } else if (home < guest) {
        guestEl.style.color = 'green';
        homeEl.style.color = 'inherit';
    } else {
        homeEl.style.color = 'inherit';
        guestEl.style.color = 'inherit';
    }
}

function homeOne() {
    home += 1
    homeEl.textContent = home  
    highlight()
}

function homeTwo() {
    home += 2
    homeEl.textContent = home  
    highlight()
}
function homeThree() {
    home += 3
    homeEl.textContent = home  
    highlight()
}

function guestOne() {
    guest += 1
    guestEl.textContent = guest  
    highlight()
}

function guestTwo() {
    guest += 2
    guestEl.textContent = guest 
    highlight() 
}
function guestThree() {
    guest += 3
    guestEl.textContent = guest 
    highlight() 
}

function reset() {
    home = 0
    guest = 0
    homeEl.textContent = home
    guestEl.textContent = guest
}