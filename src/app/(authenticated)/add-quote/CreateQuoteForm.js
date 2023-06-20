"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateQuoteForm = () => {
  const { authedUser } = useAuth();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [imageFile, setImageFile] = useState("/default-photo.jpg");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];

    try {
      setError("");
      setUploading(true);
      const url = await uploadQuotePhoto(user.id, file);
      setImageFile(url);
    } catch (error) {
      setError(error.message);
    } finally {
      e.target.value = null;
      setUploading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form
      className="flex flex-col w-full rounded-sm max-w-6xl sm:max-h-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2 gap-2 sm:gap-4">
          <label
            className="block font-bold text-headingColor mb-2 text-sm"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-slate-400"
            id="author"
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            value={author}
          />
        </div>
        <div className="flex flex-col items-center w-full mb-8 sm:w-1/2 sm:ml-12 sm:mb-0">
          <label className="block font-bold self-start text-headingColor mb-4 text-sm sm:ml-16 sm:mb-2">
            Profile picture
          </label>
          <div className="flex flex-col sm:mt-6">
            <Image
              src={imageFile}
              className="w-40 h-40 rounded-full sm:w-50 sm:h-50"
              height={200}
              width={200}
              alt="author"
            />
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUploadPhoto}
              disabled={uploading}
            />
            <label
              htmlFor="photo-upload"
              className="cursor-pointer font-semibold text-sm text-center min-w-fit text-primary mt-4 p-2 bg-secondary rounded-md border border-slate-400 hover:border-slate-600 hover:bg-highlight"
            >
              {uploading ? "Uploading..." : "Upload profile picture"}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <label
          className="block font-bold text-headingColor mb-2 text-sm"
          htmlFor="quote"
        >
          Quote
        </label>
        <textarea
          className="border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-slate-400"
          placeholder="Enter quote"
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          rows={8}
        />
      </div>
      {error && (
        <p className="text-center text-sm mt-5 text-red-500">Error: {error}</p>
      )}
      <div className="flex justify-center align-center gap-5 mt-5 sm:justify-end">
        <button
          className="w-1/4 min-w-[84px] text-sm bg-buttonPrimary hover:bg-buttonSecondary text-white 
  font-bold py-2 px-4 rounded-md focus:shadow-outline sm:w-1/6 sm:text-base"
        >
          Save
        </button>
        <Link
          href="/home"
          className="w-1/4 min-w-[84px] no-underline text-sm text-center hover:bg-highlight border-2 
  text-primary font-bold py-2 px-4 rounded-md focus:shadow-outline sm:w-1/6 sm:text-base"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreateQuoteForm;
