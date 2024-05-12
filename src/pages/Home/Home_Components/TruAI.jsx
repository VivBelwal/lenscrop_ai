import React from 'react'
import { Link } from 'react-router-dom'
import tru_video from "../../../assests/videos/Tru_AI_video.mp4";
import tru_image from "../../../assests/images/TruAI_Image.webp";

const TruAI = () => {
  const bgAnimation = 'animate-clipTextMove bg-[length:200%] bg-clip-text text-transparent bg-gradient-to-r from-[#9747ff] via-[#2f80ed] to-[#ee216b]'
  const layout = 'flex justify-center items-center';
  return (
    <div className='py-[5rem] w-[100%] font-navContent bg-[#fcfbf7] dark:bg-[#000]'>
      <div className='bg-[#272e5c] w-[100%] flex gap-[30px] sm:h-[550px] h-[400px] justify-between items-center' style={{clipPath: 'polygon(0 22.5%,100% 0,100% 100%,0 100%)'}}>

        <div className={`w-[33%] mt-[4rem] ${layout} hidden xl:block`}>
          <img src={tru_image} alt="tru_image" className='w-[100%] ml-[5rem]'/>
        </div>
        <div className={`xl:w-[33%] md:w-[65%] w-[100%]  mt-[4rem] flex-col ${layout} `}>
          <h1 className='xl:text-[64px] sm:text-[44px] text-[32px]  font-bold mb-[20px] text-[#fff]'>Meet <span className={`${bgAnimation}`}>
              Tru-AI
              </span>
              </h1>
            <h3 className="text-[20px] sm:text-[26px] font-medium mb-[15px] text-[#fff]">Design. Create. Deploy.</h3>
            <div className={`${bgAnimation} flex gap-[10px] `}>

            <span className='border-b-[2px] border-solid mb-[15px] w-[2.5rem] border-b-[#bdbdbd]'></span>
            <span className='sm:text-[20px] text-[16px] font-semibold mb-[15px]'>

            the Future of AI | Power to EDIT
            </span>
            </div>
           
            <p className='text-[#fff] text-center sm:text-[14px] text-[12px] mb-[15px]'>Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</p>
            
            <Link to="/about">
      <button className="group/learnMore hover:bg-[#fff] flex justify-center items-center text-[1.2rem] px-[1rem] py-[.6rem] my-[10px]  pointer-cursor duration-300 rounded-[10px]  hover:text-[#000]  text-[#fff] bg-transparent border border-[#fff] border-solid ">
        <span>Learn More</span>
        <span class="ml-2 hidden group-hover/learnMore:inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </Link>
        </div>

        <div className='w-[33%] hidden md:flex  justify-end '>
          <video autoPlay muted loop className='w-[90%] rounded-tl-[1000px] rounded-tr-[0px] rounded-bl-[1000px] rounded-tr-[0px] object-cover'>
            <source src={tru_video} type="video/mp4" />
          </video>
        </div>

        </div>      
    </div>
  )
}

export default TruAI
