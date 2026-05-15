import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={() => onDeleteToy(toy.id)}
          onLike={() => onLikeToy(toy.id, toy.likes + 1)}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
