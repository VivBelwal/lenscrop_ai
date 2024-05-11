import React from "react";
// import Background_Hero from "../../../assests/images/Background_image_hero_2.webp";
import styles from "../../../styles/Hero.module.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className={`${styles.hero_container} relative w-[100%] h-[100vh] font-navContent  bg-cover bg-center text-[1.2rem]`}
    >
      <div className="w-[37%] absolute top-[20%] left-[15%]">
        <h1 className="font-heroCotent text-[64px] font-semibold leading-[65px]">
          We are at the forefront of AI
        </h1>
        <p className="font-light mt-[45px]">
          From Conserving Wildlife to Automatically Generating Caricatures -{" "}
          <span className="font-bold">We Do It All</span>
        </p>
        <Link to="/about">
          <button 
        className="bg-[#000] text-[1.2rem] px-[2rem] py-[.6rem] my-[10px]  pointer-cursor duration-300 rounded-[10px] text-[#fff] hover:text-[#000] hover:bg-[#fff] border border-[#000] border-solid"
        >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
