import { useEffect, useState } from "react";
import "./Digicards.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Digicards() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const { history } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios(
          "https://digimoncard.io/api-public/search.php?sort=random"
        );
        console.log(results.data);
        setData(results.data.filter((i, limit) => limit < 12));
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  const renderList = () => {
    return (
      <div className="item-container">
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              <NavLink to={`/Cardsdetails/${item.name}/${item.cardnumber}`}>
                <img className="img-list" src={item.image_url} alt="" />
                <div className="name-list">
                  <p>Name: {item.name}</p>
                  <p>Card Number: {item.cardnumber}</p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div className="random-page d-flex flex-column align-items-center">
      {renderError()}
      <h1 className="txt">Digimon Card List</h1>
      {isLoading ? (
        <div className="text-white text-center mb-3">Loading...</div>
      ) : (
        <div className="container gifs mb-3">{renderList()}</div>
      )}
    </div>
  );
}

export default Digicards;
