import React from "react";
import Card from "./components/Card";
const App = () => {
 
   const users = [
    {
      name: "Neeraj Surnis",
      city: "Miraj",
      age: 21,
      profession: "Full Stack Developer",
      profilePhoto:
        "https://i.pinimg.com/736x/28/4f/55/284f559d636e9e1156898727fc25bf25.jpg",
    },
    {
      name: "Shahrukh Khan",
      city: "Mumbai",
      age: 24,
      profession: "Data Scientist",
      profilePhoto:
        "https://i.pinimg.com/736x/c1/55/d7/c155d768539aad53a7d955362bec01fa.jpg",
    },
    {
      name: "Rahul Deshmukh",
      city: "Pune",
      age: 26,
      profession: "Software Engineer",
      profilePhoto:
        "https://i.pinimg.com/736x/b2/1c/48/b21c4877ddde36a0a75c57a3c4d41934.jpg",
    },
    {
      name: "Anjali Sharma",
      city: "Bengaluru",
      age: 23,
      profession: "UX Designer",
      profilePhoto:
        "https://i.pinimg.com/originals/56/52/ca/5652cae6142f67d87d68d2d4f9697ef0.jpg",
    },
    {
      name: "Vikram Patil",
      city: "Delhi",
      age: 29,
      profession: "Project Manager",
      profilePhoto:
        "https://i.pinimg.com/enabled_hi/564x/ec/9b/61/ec9b6156569813a1c554bc3aeb6e909c.jpg",
    },
  ];
  return (
    <>
      <div className="p-10">
        {users.map((element,index) => {
          return (
            <Card
              key = {element.index}
              user={element.name}
              age={element.age}
              city={element.city}
              profession={element.profession}
              profilePhoto={element.profilePhoto}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
