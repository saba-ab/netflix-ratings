import MovieCard from "./MovieCard";
import "./table.css";
interface Props {
  movieList: Movie[];
}
interface Movie {
  name: string;
  releaseYear: number;
  rating: number;
  url: string;
}

function MovieTable({ movieList }: Props) {
  return (
    <table>
      {movieList.map((movie: any) => {
        return (
          <MovieCard
            name={movie.name}
            release={movie.releaseYear}
            rating={movie.rating}
            openLink={() => window.open(movie.url)}
          ></MovieCard>
        );
      })}
    </table>
  );
}

export default MovieTable;
