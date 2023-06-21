"use client";
import Image from "next/image";
import { useState } from "react";

const QuoteCard = ({ quote }) => {
  const [likes, setLikes] = useState(quote.likes);

  const handleUpvote = () => {
    setLikes(likes + 1);
  };

  const handleDownvote = () => {
    setLikes(likes - 1);
  };
  return (
    <li key={quote.id} className="w-full rounded overflow-hidden p-4 shadow-lg">
      <div className="flex flex-col">
        <div className="flex justify-around">
          <Image
            className="w-20 h-20 rounded-full sm:w-28 sm:h-28"
            src={quote.photo}
            width={300}
            height={300}
            alt={quote.author}
          />
          <div className="py-4">
            <p className="font-bold text-xl">{quote.author}</p>
            <p className="inline-block rounded-full text-xs font-semibold text-tertiary mr-2">
              Posted: {quote.createdAt.toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="text-secondary text-center text-base mt-4">
          {quote.quote}
        </p>
        <div className="flex mt-4 justify-around sm:gap-4 sm:justify-center">
          <button
            className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownvote}
          >
            Downvote
          </button>
          <span className="inline-block self-center bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {likes}
          </span>
          <button
            className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpvote}
          >
            Upvote
          </button>
        </div>
      </div>
    </li>
  );
};

export default QuoteCard;
