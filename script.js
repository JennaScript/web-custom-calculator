// Creation of variables
const display = document.querySelector('#display')
const totalDisplay = document.querySelector('#total')
const costInput = document.querySelector('#cost')
const dispensaryInput = document.querySelector('#dispensary')
const countyInput = document.querySelector('#county')
const unitsInput = document.querySelector('#units')

// Event Listeners
costInput.addEventListener('input', calculateCost)
dispensaryInput.addEventListener('input', calculateCost)
countyInput.addEventListener('input', calculateCost)
unitsInput.addEventListener('#units', calculateCost)

// Creation of calculateCost function
function calculateCost() {
    const totalDisplay = parseFloat(costInput.value) 
    const dispensaryValue = parseFloat(dispensaryInput.value) 
    const countyValue = parseFloat(countyInput.value)
    const unitsValue = parseFloat(unitsInput.value)
    const totalCost = parseFloat(unitsValue * (totalDisplay + dispensaryValue + countyValue))
    display.innerHTML = totalCost.toFixed(2) 
    totalDisplay.innerHTML = totalCost.toFixed(2)
}

calculateCost()
