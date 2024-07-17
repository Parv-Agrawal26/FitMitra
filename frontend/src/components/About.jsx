import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is your fitness.</p>
            </div>

            <p className="mid">
              Welcome to Fit Mitra, where we believe that a healthy lifestyle starts with the right nutrition. Our mission is to provide delicious, wholesome meals that fuel your body and support your fitness goals. Each dish on our menu is carefully crafted using fresh, locally-sourced ingredients to ensure maximum flavor and nutritional value. Whether you’re a seasoned athlete, a fitness enthusiast, or simply someone looking to eat better, Fit Mitra offers a diverse range of options to suit your needs. Join us for a meal that not only tastes great but also helps you live your best life.

            </p>
            <a href="./menu.html" target="_blank" rel="noopener noreferrer">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </a>

          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;