import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
    </div>
  );
}

export default MovieCard;
