import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Magnifier from "react-magnifier";
import Character from "./Character";

const Scene = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [scene, setScene] = useState({ imgLink: "" });
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        //console.log(response);
        setScene(response);
      })
      .catch(() => navigate("/scenes"));
  }, [params.id]);

  useEffect(() => {
    callCheckPosition(0, 0);
  }, []);

  const callCheckPosition = async (xValue, yValue) => {
    const url = `/api/v1/${params.id}/check_position`;
    const csrfToken = document.querySelector('[name="csrf-token"]').content;
    const body = new URLSearchParams();
    body.append("x", xValue.toFixed(2));
    body.append("y", yValue.toFixed(2));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": csrfToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const responseData = await response.json();
      console.log(responseData);
      setAnswers(responseData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const resetFound = async () => {
    const url = `/api/v1/${params.id}/reset_found`;
    const csrfToken = document.querySelector('[name="csrf-token"]').content;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": csrfToken,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Reset the found status locally
      const updatedAnswers = Object.keys(answers).map((key) => ({
        ...answers[key],
        found: false,
      }));

      setAnswers(updatedAnswers);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleClick = (event) => {
    // Set the size of the image
    const imageWidth = 1200;
    const imageHeight = 790;

    // Get the click coordinates
    const currentX = event.nativeEvent.offsetX;
    const currentY = event.nativeEvent.offsetY;

    // Calculate the relative position
    const relativeX = currentX / imageWidth;
    const relativeY = currentY / imageHeight;

    console.log({ frontEndX: relativeX, FrontEndY: relativeY });
    callCheckPosition(relativeX, relativeY);
  };

  const characterComponents = Object.values(answers).map((character) => (
    <Character
      key={character.name}
      name={character.name}
      image={character.image}
      found={character.found}
    />
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-between items-center w-full px-4">
        <Link to={"/scenes"} className="text-slate-500 font-light">
          &lt;-
        </Link>
        <h1 className="text-2xl text-bold">Level {params.id}</h1>
      </div>
      <div className="flex justify-center items-center my-4">
        {characterComponents}
      </div>
      <button onClick={resetFound}> Reset</button>
      <Magnifier
        style={{ borderRadius: "1rem" }}
        src={scene.imgLink}
        onClick={handleClick}
        width={1200} //fixed, do not tweak
        id="my-image"
      />
    </div>
  );
};

export default Scene;
