import { WatchedInfo } from "./WatchedInfo";

export function WatchedItem({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <WatchedInfo
        imdbRating={movie.imdbRating}
        userRating={movie.userRating}
        runtime={movie.runtime}
      />
    </li>
  );
}
