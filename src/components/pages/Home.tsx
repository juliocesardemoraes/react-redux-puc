import { useEffect, useState } from "react";
import { MoviesService } from "../../api/MovieService";
import { Movie } from "../organisms/Movie";
import "./styles/home.css";
import { IMovie } from "../../interfaces/interfaces";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesService.getMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie: IMovie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
