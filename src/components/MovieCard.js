import React from "react";

function MovieCard({
  title,
  posterSrc = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJkc5QBoCplF1PKcJyX4Ag0tfDuoXBbolfkYDfCYGGaeYNpXtc",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
