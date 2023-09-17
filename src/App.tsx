import Button from "./components/Button";
import MovieTable from "./components/MovieTable";
import { useState } from "react";
function App() {
  const sitcoms = [
    {
      name: "Friends",
      releaseYear: 1994,
      rating: 8.5,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Office",
      releaseYear: 2005,
      rating: 8.9,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Parks and Recreation",
      releaseYear: 2009,
      rating: 8.6,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Brooklyn Nine-Nine",
      releaseYear: 2013,
      rating: 8.4,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "How I Met Your Mother",
      releaseYear: 2005,
      rating: 8.3,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Big Bang Theory",
      releaseYear: 2007,
      rating: 8.1,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Modern Family",
      releaseYear: 2009,
      rating: 8.4,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Simpsons",
      releaseYear: 1989,
      rating: 8.6,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Seinfeld",
      releaseYear: 1989,
      rating: 8.8,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The IT Crowd",
      releaseYear: 2006,
      rating: 8.5,
      url: "https://netflix.com/sitcom",
    },
  ];
  const [sort, setSort] = useState(false);
  if (!sort)
    return (
      <div>
        <Button
          text="Sort on click"
          onSort={() => sitcoms.sort((a, b) => b.rating - a.rating)}
        ></Button>
        <MovieTable movieList={sitcoms}></MovieTable>
      </div>
    );
}

export default App;
