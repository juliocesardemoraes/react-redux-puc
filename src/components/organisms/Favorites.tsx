import { useSelector } from "react-redux";
import { IMovie } from "../../interfaces/interfaces";
import { IStoreState } from "../../redux/store";

export const Favorites = () => {
  const favoritos = useSelector((state: IStoreState) => state.favorites);

  return (
    <section>
      <h1>Meus filmes favoritos</h1>
      <ul>
        {favoritos.movies.map((movie: IMovie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
};
