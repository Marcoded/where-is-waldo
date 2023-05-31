import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Scenes = () => {
  const navigate = useNavigate();
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/api/v1/scenes/index";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setScenes(data);
      } catch (error) {
        navigate("/");
      }
    };
    fetchData();
  }, []);
  







  const allScenes = scenes.map((scene,index) => (
    <Link key={scene.id} to={`/scenes/${scene.id}`} className="">
        <div  className="bg-slate-800 rounded-3xl mt-10 hover:scale-105 transition-all duration-100 cursor-pointer">
            
            <img className="  overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-t-3xl h-96 w-auto" src={scene.imgLink} alt="" />
            <h1 className="text-slate-100 text-center">Level {index +1}</h1>
        </div>
    </Link>
   
  ))

  return (
    <>
    <h1 className=" text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700 ">Where is waldo</h1>
    <div className="flex items-center justify-around">
    {allScenes}
    </div>
    </>
  )
};

export default Scenes;