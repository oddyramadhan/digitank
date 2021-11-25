import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./Searchdetails.css";

export default function Searchdetails() {
  const [data, setData] = useState();

  const { itemcardnumber } = useParams();

  useEffect(() => {
    fetch(
      `https://digimoncard.io/api-public/search.php?sort=name&card=${itemcardnumber}`
    )
      .then((res) => res.json())
      .then((cats) => {
        setData(cats[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemcardnumber]);
  console.log(data);

  return (
    <div className="detail-page d-flex flex-column align-items-center">
      <h1 className="txt">Card Details</h1>
      {data === undefined ? (
        "Loading..."
      ) : (
        <div className="card-detail1">
          <div>
            <NavLink to="/search">
              <img src="/icon-40.png" alt=""></img>
            </NavLink>
          </div>
          <div className="colum1">
            <img className="card-img" src={data.image_url} alt="" />
          </div>
          <div className="colum2">
            <div className="card-name">
              <h1> {data.name} </h1>
            </div>
            <div className="card-desc">
              {data.color} - {data.type} - {data.stage}
            </div>
            <div className="card-number">{data.cardnumber}</div>
            <div className="card-set">
              {data.card_sets.map((item, index) => (
                <div>{item}</div>
              ))}
            </div>
            <div className="card-effect">
              <div className="Card-effect-main">{data.maineffect}</div>
              <div className="card-effect-soure">{data.soureeffect}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
