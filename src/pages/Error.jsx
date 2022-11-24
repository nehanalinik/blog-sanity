import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col h-[75vh] items-center justify-center space-y-2">
      <h2 className="text-[2rem]">
        Oops! You found a page that doesn't exists.
      </h2>
      <p>
        You seem to have discovered a page on our website that either doesn't
        exists or may have moved.
      </p>
      <span className="text-[1.25rem] pt-4 dark:text-slate-200">
        Back{" "}
        <Link to="/" className="text-blue-600">
          Home
        </Link>
      </span>
    </div>
  );
};

export default Error;
