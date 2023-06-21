"use client";

export default function Error({ error }) {
  return (
    <div>
      <h2>Error fetching user!</h2>
      <p>{error.message}</p>
    </div>
  );
}
