import React from "react";
import UpdateQuoteForm from "./UpdateQuoteForm";
import getQuote from "@/firebase/firestore/Quote/getQuote";

const Quote = async ({ params: { quoteId } }) => {
  const quoteData = await getQuote(quoteId);
  return (
    <div className="flex flex-col w-full">
      <div className="mb-12">
        <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
          Edit quote
        </h1>
        <UpdateQuoteForm quoteData={quoteData} />
      </div>
      <div>
        <h1 className="text-red-400 font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
          Delete quote
        </h1>
        <p className="text-sm">
          Warning. This action is irreversible. This quote and it's associated
          data will be deleted.
        </p>
        <button
          className="w-[160px] font-semibold text-sm mt-2 p-2 rounded-md bg-secondary text-red-400
          border border-slate-400 hover:border-slate-600 hover:bg-highlight"
        >
          Delete quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
