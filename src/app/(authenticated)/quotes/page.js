import getAllQuotes from "@/firebase/firestore/Quote/getAllQuotes";
import QuoteCard from "./QuoteCard";

const Home = async () => {
  const quotesData = await getAllQuotes();
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        Quotes
      </h1>
      <ul className="flex flex-col gap-3">
        {quotesData.map((q) => (
          <QuoteCard key={q.id} quote={q} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
