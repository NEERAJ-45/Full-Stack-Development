const Fun = () => {
  let user = "Neeraj";

  const abc = () => {
    console.log(user);
    user = "Ruchita";
    console.log(user);
  };

  return (
    <div>
      <h1>{user} will be GOAT🐐</h1>

      <button onClick={abc}>Change User</button>
      <h1>{user} will be Mine</h1>
    </div>
  );
};

export default Fun;
