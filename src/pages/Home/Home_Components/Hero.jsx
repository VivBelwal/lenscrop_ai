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
      className={`${darkMode? "": styles.hero_container} relative darK:w-[100%] w-[100%] h-[100vh] font-navContent  bg-cover bg-center  z-12`}
    >
      {
        darkMode ? 
        <video autoPlay loop muted className=" object-cover w-[100%] h-[100vh]">
        <source src={background_video} type="video/mp4" />
      </video> 
      :
      <></>
      }
      
      <div className="sm:w-[70%] w-[70%] dark:w-[80%] absolute sm:top-[25%] dark:sm:top-[25%] dark:top-[55%] top-[55%] sm:left-[15%] left-[50%] dark:sm:left-[10%] dark:top-[40%] sm:translate-x-0 sm:translate-y-0 translate-x-[-50%] translate-y-[-50%] dark:flex dark:place-items-center dark:flex-col text-center dark:text-center sm:text-start">
        
        {darkMode? 
        <>
        <h1 className="font-heroCotent  dark:md:text-[5vw]  dark:sm:text-[50px] dark:text-[40px] dark:text-[#fff] font-semibold leading-[65px] sm:mb-0 mb-[10px]">
        We are at the forefront of AI
      </h1>
      <p className="font-light md:mt-[45px] mt-[25px] dark:text-[#fff] hidden sm:block text-[2vw]">
          From Conserving Wildlife to Automatically Generating Caricatures {" "}<br/>
          <span className="font-bold dark:text-[#fff]">- We Do It All</span>
        </p>
        </>
      :
      <>
      <h1 className="font-heroCotent md:text-[64px]  sm:text-[50px] text-[40px] font-semibold leading-[65px] sm:mb-0 mb-[10px]">
          We are at the <br /> forefront of AI
        </h1>
        <p className="font-light md:mt-[45px] mt-[25px] dark:text-[#fff] hidden sm:block">
          From Conserving Wildlife to Automatically <br /> Generating Caricatures -{" "} 
          <span className="font-bold dark:text-[#fff]">We Do It All</span>
        </p>
      </>
      }
        

        <Link to="/about">
          <button 
        className="bg-[#000] dark:bg-[#fff] text-[1.2rem] px-[2rem] py-[.6rem] my-[10px] dark:my-[20px]  pointer-cursor duration-300 rounded-[10px] text-[#fff] dark:text-[#000] hover:text-[#000] dark:hover:text-[#fff] dark:hover:bg-[#000] border border-[#000] border-solid"
        >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
