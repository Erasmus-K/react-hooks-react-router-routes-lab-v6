import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then(setMovie)
      .catch((err) => console.error("Error fetching movie:", err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.genres.map((genre, i) => (
        <span key={i}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;
