import React from "react";

const Character = (props) => {
  const renderIcon = () => {
    if (props.found) {
      return <span className="text-green-700">&#10004;</span>; // Green tick symbol
    } else {
      return <span className="text-red-500">&#10008;</span>; // Red cross symbol
    }
  };

  return (
    <div className="border border-solid border-gray-500 p-2 mx-5 rounded-xl items-center flex gap-3">
      <h1>{props.name}</h1>
      <img className="h-10 w-auto" src={props.image} alt="" />
      {renderIcon()}
    </div>
  );
};

export default Character;
