import React from "react";

const   Card = (props) => {
  return (
    <div className="mr-10  bg-slate-50 text-black inline-block p-6 text-center rounded ">
      <img
        className="h-32 w-32 rounded-full mb-2 mx-auto"
      src={props.profilePhoto}
      />
      <h1 className="text-2xl font-semibold mb-4">{props.user} </h1>
      <h2>
        {props.city}, {props.age}
      </h2>
      
      <h2 className="font-semibold text-red-600">
        {props.profession}
      </h2>
      <button className="bg-blue-600 py-2 px-4 text-white rounded-md m-4 font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
