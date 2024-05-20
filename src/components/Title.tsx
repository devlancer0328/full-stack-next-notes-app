import React from "react";
import { CiStickyNote } from "react-icons/ci";

const Title = () => {
  return (
    <div className="flex">
      <h1 className="flex items-center text-yellow-400 text-xl">
        <CiStickyNote className="me-1 w-12 h-12" />
        RetroBoard
      </h1>
    </div>
  );
};

export default Title;
