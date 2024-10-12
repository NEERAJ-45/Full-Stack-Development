import React, { useState } from "react";

const Fun = () => {
  const [usersname, setusername] = useState("Neeraj");
  const [usersno, setuserno] = useState(0);
  const changeName = () => {
    setusername('Moin');
  };

  return (
    <div>
      <h1>{usersname} will be GOAT🐐</h1>
      <br></br>  
      <h3>Current value:{usersno} </h3>
      <button onClick={changeName}>Change User</button>
      <button onClick={()=>setuserno(usersno+10)}>Increment</button>
      <button onClick={()=>setuserno(usersno-10)}>Decrement</button>
    </div>
  );
};

export default Fun;
