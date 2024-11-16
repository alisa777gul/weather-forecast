import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit triggered");
    if (!query.trim()) {
      return alert("Enter value!");
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          autoFocus
          autoComplete="on"
          name="search"
          placeholder="Enter city..."
          onChange={handleChange}
        />
        <button type="submit">Find</button>
      </form>
    </>
  );
}
