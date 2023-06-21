import React from "react";
import UpdateQuoteForm from "./UpdateQuoteForm";
import getQuote from "@/firebase/firestore/Quote/getQuote";
import DeleteQuoteButton from "./DeleteQuoteButton";
import getAllQuotes from "@/firebase/firestore/Quote/getAllQuotes";

export async function generateStaticParams() {
  const quotes = await getAllQuotes();

  return quotes.map((quote) => ({
    quoteId: quote.id,
  }));
}

// export const revalidate = 30;

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
          Warning. This action is irreversible. This quote and its associated
          data will be deleted.
        </p>
        <DeleteQuoteButton quoteData={quoteData} />
      </div>
    </div>
  );
};

export default Quote;
