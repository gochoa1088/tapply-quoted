import React from "react";

const Quote = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        Edit quote
      </h1>
      <h1 className="text-red-400 font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        Delete quote
      </h1>
    </div>
  );
};

export default Quote;
