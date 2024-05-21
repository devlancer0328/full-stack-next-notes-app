import React from "react";
import { CiStickyNote } from "react-icons/ci";
import TitleButton from "./TitleButton";

const Title = () => {
  return (
    <div className="flex justify-between">
      <h1 className="flex items-center text-yellow-400 text-xl">
        <CiStickyNote className="me-1 w-12 h-12" />
        RetroBoard
      </h1>
      <TitleButton />
    </div>
  );
};

export default Title;
