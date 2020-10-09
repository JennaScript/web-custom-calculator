//setting constants for inputs
const retail_price_input = document.querySelector('#retail_price')
const county_tax_input = document.querySelector('#county_tax')
const dispensary_tax_input = document.querySelector('#dispensary_tax')
const total_items_input = document.querySelector('#total_items')

//setting constants for displays
const show_total_cost_display = document.querySelector('#total_cost')
const per_day_calc_display = document.querySelector('#episodes_per_day')

//adding event listeners for first function
retail_price_input.addEventListener('input', calculatePrice)
county_tax_input.addEventListener('input', calculatePrice)
dispensary_tax_input.addEventListener('input', calculatePrice)
total_items_input.addEventListener('input', calculatePrice)

//defining total length of show calculation function
function calculatePrice() {
    const retail_price_value = parseFloat(retail_price_input.value)
    const county_tax_value = parseFloat(county_tax_input.value)
    const dispensary_tax_value = parseFloat(dispensary_tax_input.value)
    const show_total_cost = retail_price_value * county_tax_value * dispensary_tax_value
}