import "./card.css";
import { useState } from "react";

interface Props {
  name: string;
  release: string;
  rating: number;
  openLink: () => void;
}

function MovieCard({ name, release, rating, openLink }: Props) {
  const [visibility, setVisibility] = useState(true);

  if (visibility)
    return (
      <tr>
        <th onClick={openLink}>{`movie name : ${name}`}</th>
        <th>{`release date :${release}`}</th>
        <th>{`rating :${rating}`}</th>
        <th onClick={() => setVisibility(false)}>remove</th>
      </tr>
    );
}

export default MovieCard;
