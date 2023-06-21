import CreateQuoteForm from "./CreateQuoteForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const AddQuote = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        Add a quote
      </h1>
      <CreateQuoteForm />
    </div>
  );
};

export default AddQuote;
