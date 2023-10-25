import { useState, useEffect, useRef } from "react";
import { API_Key } from "./App";
import StarRating from "./StarRating";
import Loader from "./Loader";

export default function MovieDetails({
  selectedMovieId,
  onMovieClose,
  onWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [movieLoading, setMovieLoading] = useState(false);
  const [movieRating, setMovieRating] = useState("");
  const isWatched = watched.map((m) => m.imdbID).includes(selectedMovieId);
  const currentRating = watched.find(
    (m) => m.imdbID === selectedMovieId
  )?.userRating;

  const ratingCount = useRef(0);

  useEffect(
    function () {
      if (movieRating) ratingCount.current = ratingCount.current + 1;
    },
    [movieRating]
  );

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbID,
  } = movie;

  function createNewWatched() {
    const newWatched = {
      imdbID,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating: movieRating,
      ratingCount: ratingCount.current,
    };

    onWatched(newWatched);
    onMovieClose();
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onMovieClose();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onMovieClose]
  );

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setMovieLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_Key}&i=${selectedMovieId}`
        );
        const data = await res.json();
        setMovie(data);
        setMovieLoading(false);
      }
      fetchMovieDetails();
    },
    [selectedMovieId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      return function () {
        document.title = "Popcorn Movie";
      };
    },
    [title]
  );

  return (
    <div className="details">
      {movieLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onMovieClose}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released}&bull;{runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onRating={setMovieRating}
                  />
                  {movieRating && (
                    <button className="btn-add" onClick={createNewWatched}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {currentRating} ⭐️.</p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
