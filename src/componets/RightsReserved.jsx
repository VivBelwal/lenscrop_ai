import React from 'react'

const RightsReserved = () => {
    let spanCSS = 'text-[#999]' 
  return (
    <div className={`w-[100%] flex justify-center items-center font-navContent text-[15px] py-[40px] bg-[#272e5c] dark:bg-[#242424]  `}>
        <div className={`w-[85%] flex md:flex-row flex-col md:justify-between gap-[10px] text-[#fff] text-center`}>
          <div>
            <span className={`${spanCSS}`}>2023</span> LENS, Inc. <span className={`${spanCSS}`}>All rights reserved.</span> </div>
          <div className='flex gap-[10px] justify-center text-center'>
          <p>Code of conduct</p>
          <p>Sustainability Goals</p>
          </div>
        </div>
      
    </div>
  )
}

export default RightsReserved
