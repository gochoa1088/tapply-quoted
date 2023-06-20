import getAllQuotes from "@/firebase/firestore/Quote/getAllQuotes";

const Home = async () => {
  const quotesData = await getAllQuotes();
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        Quotes
      </h1>
      <ul>
        {quotesData.map((q) => (
          <li key={q.id}>{q.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
