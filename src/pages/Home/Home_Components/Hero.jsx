import React, { useContext } from "react";
// import Background_Hero from "../../../assests/images/Background_image_hero_2.webp";
import styles from "../../../styles/Hero.module.css";
import { Link } from "react-router-dom";
import { ToogleContext } from "../../../context/ToggleTheme";
import background_video from "../../../assests/videos/background_hero_video.mp4"
const Hero = () => {
  const {darkMode, toggelMode} = useContext(ToogleContext);

  return (
    <div
      className={`${darkMode? "": styles.hero_container} relative w-[100%] h-[100vh] font-navContent  bg-cover bg-center text-[1.2rem] z-12`}
    >
      {
        darkMode ? 
        <video autoPlay loop muted className=" object-cover w-[100%] h-[100vh]">
        <source src={background_video} type="video/mp4" />
      </video> 
      :
      <></>
      }
      
      <div className="w-[37%] dark:w-[80%] absolute top-[20%] left-[15%] dark:left-[10%] dark:top-[40%] dark:flex dark:place-items-center dark:flex-col">
        <h1 className="font-heroCotent text-[64px] dark:text-[#fff] font-semibold leading-[65px]">
          We are at the forefront of AI
        </h1>
        <p className="font-light mt-[45px] dark:text-[#fff]">
          From Conserving Wildlife to Automatically Generating Caricatures -{" "}
          <span className="font-bold dark:text-[#fff]">We Do It All</span>
        </p>
        <Link to="/about">
          <button 
        className="bg-[#000] dark:bg-[#fff] text-[1.2rem] px-[2rem] py-[.6rem] my-[10px]  pointer-cursor duration-300 rounded-[10px] text-[#fff] dark:text-[#000] hover:text-[#000] dark:hover:text-[#fff] dark:hover:bg-[#000] border border-[#000] border-solid"
        >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
