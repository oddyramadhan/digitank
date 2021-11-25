import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about grid-container">
      <h1>About App</h1>
      <p>
        DigiTank is an app that contains some information about Digimon Card.
        This app was made to fulfill the Final Assignment of Mobile Device
        Programming Practicum. This app was created using React JS and an API.
      </p>
      <h2>About Author</h2>
      <div className="container">
        <img src="foto.jpg" alt="author pic" />
        <p>
          My name is Oddy Ramadhan with NIM 21120119140122 from group 14 of
          Mobile Device Programming Practicum. I am a student of Computer
          Engineering at Diponegoro University.
        </p>
      </div>
    </div>
  );
}
