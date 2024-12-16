const citiesHabitantsInMillions = [
  { city: "London", habitants: 8.9 },
  { city: "Rome", habitants: 2.8 },
];

const BuenosAires = { city: "Buenos Aires", habitants: 3100000 };

const toMillionsAdapter = (city) => {
  city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
};

toMillionsAdapter(BuenosAires);
citiesHabitantsInMillions.push(BuenosAires);
