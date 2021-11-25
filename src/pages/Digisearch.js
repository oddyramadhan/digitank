import { useEffect, useState } from "react";
import "./Digisearch.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Digicards = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  useEffect(() => {
    const doSearch = (e) => {
      axios
        .get("https://digimoncard.io/api-public/search.php?n=" + name)
        .then((results) => {
          console.log(results.data);
          setData(results.data.filter((i, limit) => limit < 12));
        });
    };
    doSearch();
  }, [name]);
  console.log(data);

  const renderList = () => {
    return (
      <main>
        <div className="search">
          <p>
            Search:{" "}
            <input
              type="text"
              placeholder="Search by name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
        </div>
        <div className="item-container1">
          {data.map((item, index) => {
            return (
              <div className="box1" key={index}>
                <NavLink to={`/Searchdetails/${item.name}/${item.cardnumber}`}>
                  <img className="img-list1" src={item.image_url} alt="" />
                  <div className="name-list1">
                    <p>Name: {item.name}</p>
                    <p>Card Number: {item.cardnumber}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </main>
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
      <h1 className="txt">Find Your Digimon Card</h1>
      {isLoading ? (
        <div className="text-white text-center mb-3">Loading...</div>
      ) : (
        <div className="container gifs mb-3">{renderList()}</div>
      )}
    </div>
  );
};

export default Digicards;
