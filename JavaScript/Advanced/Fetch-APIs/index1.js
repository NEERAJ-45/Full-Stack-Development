fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((resolve) => resolve.json())
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error));
