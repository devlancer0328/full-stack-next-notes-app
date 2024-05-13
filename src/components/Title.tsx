import React from "react";
import { CiStickyNote } from "react-icons/ci";

const Title = () => {
  return (
    <div className="flex">
      <h1 className="flex items-center text-yellow-400">
        <CiStickyNote className="me-1" />
        Title
      </h1>
    </div>
  );
};

export default Title;
