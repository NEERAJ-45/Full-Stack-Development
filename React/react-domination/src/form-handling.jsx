import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("NS");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={username} //sets initial value to username
          onChange={(event) => {
            // console.log('Neeraj Bhai Jodd🔥')
            setUsername(event.target.value);
          }}
          placeholder="Enter Your Name: "
          className="px-3 py-4 m-7 text-xl text-zinc-800 rounded-md border-none"
        ></input>
        <button className="px-4 text-white py-3 m-5 text-xl font-semibold bg-purple-700 rounded">Submit</button>
      </form>
    </div>
  );
};

export default App;
