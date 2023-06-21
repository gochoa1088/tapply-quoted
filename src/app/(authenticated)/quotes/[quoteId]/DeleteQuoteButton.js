"use client";

import deleteQuote from "@/firebase/firestore/Quote/deleteQuote";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteQuoteButton = ({ quoteData }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleDeleteQuote = async () => {
    try {
      await deleteQuote(quoteData.id);
      router.push("/quotes");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <button
        onClick={handleDeleteQuote}
        className="w-[160px] font-semibold text-sm mt-2 p-2 rounded-md bg-secondary text-red-400
      border border-slate-400 hover:border-slate-600 hover:bg-highlight"
      >
        Delete quote
      </button>
      {error && (
        <p className="text-center text-sm mt-5 text-red-500">Error: {error}</p>
      )}
    </>
  );
};

export default DeleteQuoteButton;
