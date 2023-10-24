import { WatchedItem } from "./WatchedItem";

export function WatchedList({ watched, onRemove }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedItem movie={movie} key={movie.imdbID} onRemove={onRemove} />
      ))}
    </ul>
  );
}
