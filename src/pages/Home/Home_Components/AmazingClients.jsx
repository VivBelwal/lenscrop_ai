import React, { useContext } from 'react';
import Amazing_images_1 from "../../../assests/images/Amazing_Clients_image1.webp";
import Amazing_images_1_dark from "../../../assests/images/Amazing_Clients_image1_dark.webp";
import Amazing_images_2 from "../../../assests/images/Amazing_Clients_image2.webp";
import Amazing_images_2_dark from "../../../assests/images/Amazing_Clients_image2_dark.webp";
import Amazing_images_3 from "../../../assests/images/Amazing_Clients_image3.webp";
import Amazing_images_3_dark from "../../../assests/images/Amazing_Clients_image3_dark.webp";
import Amazing_images_4 from "../../../assests/images/Amazing_Clients_image4.webp";
import Amazing_images_4_dark from "../../../assests/images/Amazing_Clients_image4_dark.webp";
import { ToogleContext } from '../../../context/ToggleTheme';

const AmazingClients = () => {
  const {darkMode } = useContext(ToogleContext);

    let images_css = 'w-[12rem] h-[8rem]'
  return (
    <div className='flex flex-col place-items-center w-[100%] bg-[#fcfbf7] dark:bg-[#000]  overflow-hidden mt-[-1px]'>
        <div>
            <h1 className='font-heroCotent md:text-[32px] sm:text-[26px] text-[22px] font-semibold dark:text-[#fff]'>
            We Work With Amazing Clients
            </h1>
        </div>

        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center w-[70%] md:py-[4rem] py-[3rem] py-[2rem] animate-amazingBannerMove overflow-hidden' style={{color:'transparent'}}>
          <div><img src={darkMode? `${Amazing_images_1_dark}` : `${Amazing_images_1}`} alt="Amazing_images_1" className={`${images_css}`}/></div>
          <div><img src={darkMode? `${Amazing_images_2_dark}` : `${Amazing_images_2}`} alt="Amazing_images_2" className={`${images_css}`}/></div>
          <div><img src={darkMode? `${Amazing_images_3_dark}` : `${Amazing_images_3}`} alt="Amazing_images_3" className={`${images_css}`}/></div>
          <div><img src={darkMode? `${Amazing_images_4_dark}` : `${Amazing_images_4}`} alt="Amazing_images_4" className={`${images_css}`}/></div>
        </div>
      
    </div>
  )
}

export default AmazingClients
