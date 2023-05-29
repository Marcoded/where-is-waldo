import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Scenes = () => {
  const navigate = useNavigate();
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/scenes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setScenes(res))
      .catch(() => navigate("/"));
  }, []);



  const allScenes = scenes.map((scene,index) => (
    <div key={index}>
        <img src={scene.imgLink} alt="" />
    </div>
  ))

  return (
    <>
    {allScenes}
    </>
  )
};

export default Scenes;