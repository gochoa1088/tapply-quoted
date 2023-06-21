"use client";

const QuotesList = ({ quotesData }) => {
  console.log(quotesData);
  return (
    <ul className="flex flex-col gap-3">
      {quotesData.map((q) => (
        <QuoteCard key={q.id} quote={q} />
      ))}
    </ul>
  );
};

export default QuotesList;
