import { useState } from "react";
import { Button } from "./Button";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedList } from "./WatchedList";
import { tempWatchedData } from "./App";

export function WatchedBox({ children }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div>
      <Button isOpen={isOpen2} setIsOpen={setIsOpen2} />

      {isOpen2 && <>{children}</>}
    </div>
  );
}
