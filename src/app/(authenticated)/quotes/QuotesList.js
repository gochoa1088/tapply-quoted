"use client";
import QuoteCard from "./QuoteCard";

const QuotesList = ({ quotesData }) => {
  return (
    <ul className="flex flex-col gap-3">
      {quotesData.map((q) => (
        <QuoteCard key={q.id} quote={q} />
      ))}
    </ul>
  );
};

export default QuotesList;
