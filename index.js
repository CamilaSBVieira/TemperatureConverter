const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const clear = document.getElementById('clear');
const form = document.getElementById('form');


kelvin.addEventListener('keyup', (e) => {
  celsius.value = kelvinToCelsius(e.target.value);
  fahrenheit.value = kelvinToFahrenheit(e.target.value);
});

const kelvinToCelsius = kelvinInput => {
  let result = kelvinInput - 273.15;
  return result.toFixed(2);
};

const kelvinToFahrenheit = kelvinInput => {
  let result = (kelvinInput - 273.15) * 9/5 + 32;
  return result.toFixed(2);
};

celsius.addEventListener('keyup', (e) => {
  kelvin.value = celsiusToKelvin(e.target.value);
  fahrenheit.value = celsiusToFahrenheit(e.target.value);
});

const celsiusToKelvin = celsiusInput => {
  let result = Number(celsiusInput) + 273.15;
  return result.toFixed(2);
}
const celsiusToFahrenheit = celsiusInput => {
  let result = (celsiusInput * 9/5) + 32;
  return result.toFixed(2);
}

fahrenheit.addEventListener('keyup', (e) => {
  celsius.value = fahrenheitToCelsius(e.target.value);
  kelvin.value = fahrenheitToKelvin(e.target.value);
});

const fahrenheitToCelsius = fahrenheitInput => {
  let result = (fahrenheitInput - 32) * 5/9;
  return result.toFixed(2);
}
const fahrenheitToKelvin = fahrenheitInput => {
  let result = (fahrenheitInput - 32) * 5/9 + 273.15;
  return result.toFixed(2);
}

function clearFunc() {
  form.reset();
}

clear.addEventListener('click', clearFunc);