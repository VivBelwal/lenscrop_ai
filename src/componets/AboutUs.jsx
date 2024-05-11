import React from 'react'
import { Link } from 'react-router-dom'
import group_photo from "../assests/images/about_group_photo.webp";
const AboutUs = () => {
  return (
    <div className='bg-[#fff] dark:bg-[#000] w-[100%] py-[5rem]'>
        {/* ------ About Us text --------- */}
        <div className='flex flex-col gap-[5px] justify-center items-center mb-[5rem]'>
      <h1 className='text-[64px] font-semibold text-center dark:text-[#fff]'>About Us</h1>
      <div className='w-[165px] h-[8px] rounded-[20px] bg-gradient-to-r from-[#0091ff] to-[#9cfeff] '></div>
        </div>

       {/*-------- About Us Content ----------  */}
      <div className='group/parentScale hover:scale-105 px-[2rem] py-[3rem] flex flex-row gap-[10px] bg-[#e2f2ff] dark:bg-[#1b1c1e] rounded-[10px] w-[80%] m-auto duraiton-300 justify-between'>
       
        <div className='flex flex-col items-start justify-center w-[40%]'>
        <h3 className='font-navContent text-[2.8rem] font-bold mb-[2rem] dark:text-[#fff]'>
            Welcome To LENS
        </h3>
        <p className='w-[75%] mt-[.2rem] font-light font-navContent leading-10 dark:text-[#fff]'>
        We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.
        </p>


         <Link to="/about">
        <button 
               className="group/learnMore hover:bg-[#000] dark:hover:bg-[#fff] flex justify-center items-center text-[1.2rem] px-[1rem] py-[.6rem] my-[10px]  pointer-cursor duration-300 rounded-[10px] hover:text-[#fff] dark:hover:text-[#000] text-[#000] dark:text-[#fff] bg-transparent border border-[#000] dark:border-[#fff] border-solid "
        >
            <span>

            Learn More
            </span>
            <span class="ml-2 hidden group-hover/learnMore:inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff dark:#000" className="w-6 h-6">
  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

    </span>
        </button>
         </Link>
        </div>
        {/* ---------- Group Photo ----------- */}
        <div className=' flex justify-center items-center bg-[#fff] rounded-[10px] p-[10px]'>
            <img src={group_photo} alt="group_photo" className='group-hover/parentScale:scale-105 w-[430px] rounded-[10px] object-cover h-[395px] duration-300'/>

        </div>
      </div>
    </div>
  )
}

export default AboutUs
