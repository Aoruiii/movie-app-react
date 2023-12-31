import { average } from "./App";
import { WatchedInfo } from "./WatchedInfo";

export function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <WatchedInfo
          imdbRating={avgImdbRating.toFixed(1)}
          userRating={avgUserRating.toFixed(1)}
          runtime={avgRuntime.toFixed(0)}
        />
      </div>
    </div>
  );
}
