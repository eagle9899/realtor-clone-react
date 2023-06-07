import React from "react";
import spinner from "../Assets/Svg/spinner.svg";
export default function Spinner() {
  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50 fixed left-0 top-0 bottom-0 right-0 z-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
}
