import getAllQuotes from "@/firebase/firestore/Quote/getAllQuotes";
import QuotesList from "./QuotesList";
export const dynamic = "force-dynamic";
export const revalidate = 0;
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
