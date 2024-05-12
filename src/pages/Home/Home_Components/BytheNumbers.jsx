import React from 'react'

const BytheNumbers = () => {
  const layout = 'flex justify-center items-center';
  let itemCss = 'flex flex-col gap-[10px] items-center text-center md:text-[40px] sm:text-[32px] text-[28px] ';
  let plusColor = 'text-[#0091ff]'
let byTheMembersContentCss = 'md:text-[18px] sm:text-[16px] text-[14px] sm:w-[70%] w-[90%]  text-center';
let sideLineCss = 'sm:h-[120px] h-[100px] w-[2px] bg-[#fff]'
  return (
    <div className={`${layout} text-[#fff] flex-col w-[100%] bg-[#272e5c] font-navContent  md:py-[4rem] sm:py-[3rem] py-[2rem]`}>

        <div className={`mb-[2.5rem]`}>
            <h1 className='md:text-[32px] sm:text-[26px] text-[24px]'>By the numbers</h1>
        </div>

        <div className={`flex items-center justify-around sm:w-[70%] w-[95%] sm:gap-[5px] gap-[10px] `}>
            <div className={`${itemCss}`}>
                <p >
                   15 <span className={`${plusColor}`}>+</span>
                </p>
                <p className={`${byTheMembersContentCss}`}>
                Solutions for Global crises
                </p>
            </div>
            <div className={`${sideLineCss}`}>
        
            </div>
            <div className={`${itemCss}`}>
                <p>
                    10<span className={`${plusColor}`}>+</span>
                </p>
                <p className={`${byTheMembersContentCss}`}>
                University Collaborations
                </p>
            </div>
            <div className={`${sideLineCss}`}>
        
        </div>
            <div className={`${itemCss}`}>
                <p>
                    25<span className={`${plusColor}`}>+</span>
                </p>
                <p className={`${byTheMembersContentCss}`}>
                Employees Worldwide
                </p>
            </div>

        </div>

      
    </div>
  )
}

export default BytheNumbers
