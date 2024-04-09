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


/**
 * @ The fetch() function is a built-in JavaScript method used to make asynchronous HTTP requests to fetch resources from a network.
*  @ 1. It is commonly used to retrieve data from APIs or remote servers.
*@   2. fetch() takes one mandatory argument, which is the URL of the resource to fetch.
*@   3. It returns a Promise that resolves to the Response object representing the response to the request.
*@   4. The Response object contains information such as the status of the request, headers, and body.
*@   5. Once the Promise returned by fetch() is resolved, additional methods such as response.json() or response.text() can be used to extract data from the response body.
*@   6. fetch() is asynchronous, meaning it does not block the execution of JavaScript code, allowing other operations to continue while waiting for the response.
*@   7. It supports various options for customizing the request, such as setting request headers or specifying the HTTP method (GET, POST, etc.).
 
 */