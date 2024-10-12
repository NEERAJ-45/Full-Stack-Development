import React, { useState } from "react";

const Fun = () => {
  const [usersname, setusername] = useState("Neeraj");
  const changeName = () => {
    setusername('Moin');
  };

  return (
    <div>
      <h1>{usersname} will be GOAT🐐</h1>
      <button onClick={changeName}>Change User</button>
      <h1>{usersname} will be Mine</h1>
    </div>
  );
};

export default Fun;
