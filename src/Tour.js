import React from "react";
import SingleTour from "./SingleTour";

function Tour({ tours, removeItem }) {
  return (
    <section>
      <h1>our tours</h1>

      {tours.map((tour) => {
        return <SingleTour key={tour.id} {...tour} removeItem={removeItem} />;
      })}
    </section>
  );
}

export default Tour;
