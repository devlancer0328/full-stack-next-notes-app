import React from "react";

const TitleButton = () => {
  return (
    <a
      className="group relative inline-flex items-center overflow-hidden rounded border border-current px-6 py-2 text-black focus:outline-none focus:ring hover:text-yellow-400"
      href="#"
    >
      <span className="absolute -end-full transition-all group-hover:end-4">
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      <span className="text-sm font-medium transition-all group-hover:me-4">
        Add a note
      </span>
    </a>
  );
};

export default TitleButton;
