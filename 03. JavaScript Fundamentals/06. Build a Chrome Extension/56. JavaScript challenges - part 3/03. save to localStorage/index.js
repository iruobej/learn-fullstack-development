// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let name="Josh"
localStorage.setItem("name", JSON.stringify(name))
let returned = JSON.parse(localStorage.getItem("name"))
console.log(returned)