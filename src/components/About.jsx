import React from "react";

const About = () => {
  return (
    <>
      <h1>ABOUT</h1>
      <div className="p-container">
        <p>
          Xocolate creates exquisite handmade pralines, inviting you to discover
          organic fair-trade products.
        </p>
        <p>
          The Xocolate workshop collaborates enthusiastically with organizations
          contributing to a fairer world, providing chocolates for staff
          celebrations and thoughtful gifts.
        </p>
        <p>
          Xocolate is also a reflection of migration and aims to foster a
          cosmopolitan society where human rights are fully respected.
        </p>
        <p>
          Xocolate is the creation of Xavier Declercq, an artisan chocolatier
          who, after 33 years of work in international solidarity and
          development cooperation, decided to pursue another passion: chocolate.
          Despite the shift in focus, his principles and values remain
          unchanged.
        </p>
      </div>

      <img
        className="houseImg"
        src="img\praline-home.png"
        alt="home-praline"
      />
    </>
  );
};

export default About;
