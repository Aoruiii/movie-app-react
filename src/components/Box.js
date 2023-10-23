import { useState } from "react";
import { MovieList } from "./MovieList";
import { tempMovieData } from "./App";
import { Button } from "./Button";

export function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}
