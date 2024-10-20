import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        className="bg-pink-600 m-10 font-semibold text-2xl text-white  rounded-md px-4 py-2 active:scale-90 hover:bg-pink-500"
        onClick={getData}
      >
        Get Data
      </button>

      <div className="p-5 bg-zinc-950 text-xl">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className="bg-gray-50 text-black flex items-center justify-between px-7 w-full py-6 rounded-md mb-7"
            >
              <img className="h-40" src={value.download_url} alt="" />
              <h1 className="font-extrabold left-5   text-green-600 mr-96 uppercase">
                {value.author}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
