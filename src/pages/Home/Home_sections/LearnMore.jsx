import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <Link to="/about">
      <button className="group/learnMore hover:bg-[#000] dark:hover:bg-[#fff] flex justify-center items-center text-[1.2rem] px-[1rem] py-[.6rem] my-[10px]  pointer-cursor duration-300 rounded-[10px] hover:text-[#fff] dark:hover:text-[#000] text-[#000] dark:text-[#fff] bg-transparent border border-[#000] dark:border-[#fff] border-solid ">
        <span>Learn More</span>
        <span class="ml-2 hidden group-hover/learnMore:inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff dark:#000"
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
  );
};

export default LearnMore;
