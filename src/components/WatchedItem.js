import { WatchedInfo } from "./WatchedInfo";

export function WatchedItem({ movie, onRemove }) {
  const id = movie.imdbID;

  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <WatchedInfo
        imdbRating={movie.imdbRating}
        userRating={movie.userRating}
        runtime={movie.runtime}
      />
      <button className="btn-delete" onClick={() => onRemove(id)}>
        X
      </button>
    </li>
  );
}
