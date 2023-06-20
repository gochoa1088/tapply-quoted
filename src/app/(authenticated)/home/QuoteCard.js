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
    <li key={quote.id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={quote.photo}
        width={300}
        height={100}
        alt={quote.author}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{quote.author}</div>
        <p className="text-gray-700 text-base">{quote.quote}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Created: {quote.createdAt.toLocaleDateString()}
        </span>
        <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Likes: {likes}
        </span>
        <div className="flex mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpvote}
          >
            Upvote
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={handleDownvote}
          >
            Downvote
          </button>
        </div>
      </div>
    </li>
  );
};

export default QuoteCard;
