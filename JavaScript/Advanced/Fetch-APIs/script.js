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
      //   console.log(data);
      const pokemonSprite = data.sprites.front_default;
      const img = document.querySelector("#pokImage");
      img.src = pokemonSprite;
      img.style.display = "block";

      img.style =
        "height:400px; width:400px; border :1px solid brown; background: linear-gradient(90.1deg, rgb(175, 237, 255) 10.9%, rgb(255, 163, 252) 63.8%);box-shadow0px 0px 10px 0px rgba(0, 0, 0, 0.75) ";
    }
  } catch (error) {
    console.error(error);
  }
}
