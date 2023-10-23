import { WatchedItem } from "./WatchedItem";

export function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedItem movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}