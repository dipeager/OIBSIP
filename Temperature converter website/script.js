const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    
    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }
    
    if (unit === 'celsius') {
        const convertedTemperature = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature} °C is ${convertedTemperature.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        const convertedTemperature = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature} °F is ${convertedTemperature.toFixed(2)} °C`;
    }
});
