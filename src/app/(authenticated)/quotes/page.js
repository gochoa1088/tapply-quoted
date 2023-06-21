import getAllQuotes from "@/firebase/firestore/Quote/getAllQuotes";
import QuoteCard from "./QuoteCard";
import QuotesList from "./QuotesList";

const Quotes = async () => {
  const quotesData = await getAllQuotes();
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        Quotes
      </h1>
      <QuotesList quotesData={quotesData} />
    </div>
  );
};

export default Quotes;
