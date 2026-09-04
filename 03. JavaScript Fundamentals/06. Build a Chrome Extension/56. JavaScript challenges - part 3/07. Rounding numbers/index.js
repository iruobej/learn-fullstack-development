// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

let totalPrice = 420.69235632455
totalPrice = totalPrice.toFixed(2)
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice }`

