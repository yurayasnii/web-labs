const cities = {
  ger: ['Berlin', 'Munich', 'Hamburg'],
  usa: ['New-York', 'Washington', 'Boston', 'Chikago'],
  ukr: ['Kyiv', 'Lviv', 'Odessa']
};

const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const result = document.getElementById('result');

function updateCities() {
  const country = countrySelect.value;
  citiesSelect.innerHTML = '';
  cities[country].forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });
  updateResult();
}

function updateResult() {
  const country = countrySelect.options[countrySelect.selectedIndex].text;
  const city = citiesSelect.value;
  result.textContent = `${country},${city}`;
}

countrySelect.addEventListener('change', updateCities);
citiesSelect.addEventListener('change', updateResult);

updateCities();
