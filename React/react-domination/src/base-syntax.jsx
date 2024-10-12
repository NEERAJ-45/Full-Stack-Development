// @ This is a functional React component called Fun
const Fun = () => {
    // ! It returns JSX (HTML-like syntax) with two headings
    // ! JSX allows us to write HTML inside JavaScript code
  
    var user = "Neeraj";
  
    // Function defined outside JSX, handling the button click event
    const abc = () => {
      user  = "Ruchita"  // Logs 'helloo' to the console when the button is clicked
    };
  
    return (
      <div>
        {/* First heading displaying the user's name */}
        <h1>{user} will be GOAT🐐</h1>
  
        {/* Button to trigger abc function on click */}
        <button onClick={abc}>Change User</button>
        <h1>{user} will be Mine</h1>
        {/* This  onClick property will call the ABC Function declared outside of return statement*/}
      </div>
    );
  };
  
  // * Exporting the Fun component so that it can be used in other files (like main.jsx)
  export default Fun;
  