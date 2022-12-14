import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeItem = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <section>
          <h1>No Tours Left</h1>
          <div>
            <button className="refresh-btn" onClick={() => fetchData()}>
              refresh
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Tour tours={tours} removeItem={removeItem} />
    </main>
  );
}

export default App;
