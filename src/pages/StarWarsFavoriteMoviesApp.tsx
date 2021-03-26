import React, { useEffect, useState } from "react";
import TableOfContent from "../cmps/TableOfContent";
import { mainService } from "../services/mainService";

export default function StarWarsFavoriteMoviesApp() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    const movies = mainService.loadMovies();
    setMovies(movies);
  };

  return (
    <section>
      <TableOfContent movies={movies} />
    </section>
  );
}
