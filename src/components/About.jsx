import React from "react";

const About = () => {
  return (
    <>
      <h1>ABOUT</h1>
      <p>
        Xocolate creates exquisite handmade pralines, inviting you to discover
        organic fair-trade products. <br />
        <br /> The Xocolate workshop collaborates enthusiastically with
        organizations contributing to a fairer world, providing chocolates for
        staff celebrations and thoughtful gifts. <br />
        <br />
        Xocolate is also a reflection of migration and aims to foster a
        cosmopolitan society where human rights are fully respected. <br />{" "}
        <br /> Xocolate is the creation of Xavier Declercq, an artisan
        chocolatier who, after 33 years of work in international solidarity and
        development cooperation, decided to pursue another passion: chocolate.
        Despite the shift in focus, his principles and values remain unchanged.
      </p>
      <img
        className="houseImg"
        src="src\img\praline-home.png"
        alt="home-praline"
      />
    </>
  );
};

export default About;
