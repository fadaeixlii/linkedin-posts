const cities = ["London", "New York", "Tokyo", "Sydney"];

// Using map to transform each city name to uppercase
const uppercasedCities = cities.map((city) => city.toUpperCase());
console.log(uppercasedCities); // ['LONDON', 'NEW YORK', 'TOKYO', 'SYDNEY']

// Using forEach to print each city
cities.forEach((city) => console.log(city));
