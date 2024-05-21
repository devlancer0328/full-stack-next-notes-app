import React from "react";
import Note from "./Note";

const NotesArea = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NotesArea;
