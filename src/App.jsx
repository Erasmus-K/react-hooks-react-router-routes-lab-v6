import React from "react";
import { createBrowserRouter, RouterProvider, useParams, Link } from "react-router-dom";
import { movies } from "./data";
import NavBar from "./components/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

function Movie() {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      {movie.genres.map((g, i) => (
        <span key={i}>{g} </span>
      ))}
    </div>
  );
}

function Directors() {
  const directors = [
    { name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister"] },
    { name: "Matt Reeves", movies: ["The Batman", "Cloverfield"] },
    { name: "Mike Mitchell", movies: ["Shrek Forever After", "Trolls"] },
  ];

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((dir, i) => (
        <article key={i}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function Actors() {
  const actors = [
    { name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game"] },
    { name: "Robert Pattinson", movies: ["The Batman", "Tenet"] },
    { name: "Tom Holland", movies: ["Spider-Man: Homecoming", "Uncharted"] },
  ];

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, i) => (
        <article key={i}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, j) => (
              <li key={j}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, this page does not exist.</p>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/directors", element: <Directors /> },
  { path: "/actors", element: <Actors /> },
  { path: "/movie/:movieId", element: <Movie /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
