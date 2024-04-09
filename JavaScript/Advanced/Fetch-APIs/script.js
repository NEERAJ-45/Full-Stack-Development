async function Search() {
  try {
    const pokeName = document.getElementById("pokemon").value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );

    if (!response.ok) {
      throw new Error("Mavashi chi ....🌝🌚");
    } else {
      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const img = document.querySelector("#pokImage");

      // Apply styles separately
      img.style.height = '400px';
      img.style.width = '400px';
      img.style.border = '1px solid brown';
      img.style.background = 'linear-gradient(90.1deg, rgb(175, 237, 255) 10.9%, rgb(255, 163, 252) 63.8%)';
      img.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.75)';

      img.src = pokemonSprite;
      img.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}
