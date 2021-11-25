import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="menu-flex">
      <div className="">
        <h2 className="title-cat">
          Welcome to DigiTank, the ultimate Digimon Cards Database{" "}
        </h2>
        <div className="leftside">
          <Link to="/digicards">
            <div className="item">
              <img src="/img1.jpg" alt="" />
              <p>DigiCards</p>
            </div>
          </Link>
          <Link to="/search">
            <div className="item">
              <img src="/img2.jpg" alt="" />
              <p>DigiSearch</p>
            </div>
          </Link>
          <Link to="/about">
            <div className="item">
              <img src="/img3.png" alt="" />
              <p>About</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
