import { MovieItem } from "./MovieItem";

export function MovieList({ movies, onMovieSelect }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} onSelect={onMovieSelect} />
      ))}
    </ul>
  );
}
