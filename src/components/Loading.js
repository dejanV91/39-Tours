import React, { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
        return data;
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <h1 className="loading">Loading</h1>
      </section>
    );
  }
  if (isError) {
    return (
      <section>
        <h1 className="error">Error....</h1>
      </section>
    );
  }

  return (
    <>
      <section>
        <h1>our tourist</h1>
        <div className="article-divs">
          {users.map((user) => {
            const { id, image, info, name, price } = user;
            return (
              <article className="single-item" id={id} key={id}>
                <img src={image} alt={name} />
                <div className="item-content">
                  <div className="item-title-div">
                    <h3 className="item-title">{name}</h3>
                    <h3 className="item-price">${price}</h3>
                  </div>
                  <p className="desription">{info}</p>
                  <button className="no-btn">not interested</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Loading;
