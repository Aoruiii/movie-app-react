import { useRef, useState, useEffect } from "react";

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
    // function callback(e) {
    //   // if (document.activeElement === inputEl.current) return;

    //   if (e.code === "Enter") {
    //     inputEl.current.focus();
    //   }
    // }
    // document.addEventListener("keydown", callback);
    // return document.removeEventListener("keydown", callback);
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      ref={inputEl}
    />
  );
}
