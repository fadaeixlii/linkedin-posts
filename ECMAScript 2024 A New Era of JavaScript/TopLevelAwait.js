//Before
(async () => {
  const data = await fetch("https://api.example.com/data").then((response) =>
    response.json()
  );
  console.log(data);
})();

//Now
const data = await fetch("https://api.example.com/data").then((response) =>
  response.json()
);
console.log(data);
