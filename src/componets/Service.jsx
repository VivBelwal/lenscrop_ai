import React, { useContext } from "react";
import styles from "../styles/service.module.css";
import { ToogleContext } from "../context/ToggleTheme";
const Service = () => {
  const { darkMode } = useContext(ToogleContext);

  const spanCss = `text-[#707070] md:text-[88px] text-[60px] font-semibold leading-[123.2px] duration-300 opacity-20`;
  const spanCss2 = `group-hover/serviceCard:opacity-100 `;
  const cardsCss = `group/serviceCard flex flex-col relative bg-[#fff] dark:bg-[#1b1c1e]  px-10 border-solid border border-[#fcfbf7] dark:border-[#1b1c1e] rounded-[10px] duration-300 pb-[20px] `;
  const cardHeaderCss = `flex flex-row items-start rounded-[10px] relative duration-300`;
  const aiServiceCss = `flex place-items-center md:text-[32px] sm:text-[26px] text-[20px] font-semibold ml-[-20px] md:mt-[35px] mt-[35px] duration-300 group-hover/serviceCard:text-[#707070] group-hover/serviceCard:ml-[0px]`;
  const aiServiceContentCss = `w-[100%] text-[#8a8a8a] md:mt-[25px] mt-[10px] my-auto md:text-[18px] sm:text-[16px] text-[14px] leading-[32.4px] font-bold `;

  const topHeaderCss =
    "w-[80%] text-center md:text-[58px] sm:text-[44px] text-[32px] font-medium md:mb-[5rem] sm:mb-[3rem] mb-[2rem]  m-auto dark:text-[#fff]";
  // --------- Contetnt of Service -------------

  const serviceCardContent = [
    {
      id: 1,
      aiServiceCss: "text-[#01c99b]",
      aiServiceText: "Biometrics",
      hoverBorder: `hover:border-[#01c99b]`,
      hoverNumber: `group-hover/serviceCard:text-[#01c99b] `,
      hoverBackground: styles.serviceCard1,

      aiServiceContentText:
        "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    },
    {
      id: 2,
      aiServiceCss: "text-[#3FBDF1]",
      aiServiceText: "Image Analysis",
      hoverBorder: `hover:border-[#3FBDF1]`,
      hoverNumber: `group-hover/serviceCard:text-[#3FBDF1] `,
      hoverBackground: styles.serviceCard2,

      aiServiceContentText:
        "Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    },
    {
      id: 3,
      aiServiceCss: "text-[#FF605F]",
      aiServiceText: "Cross-Media Translation",
      hoverBorder: `hover:border-[#FF605F]`,
      hoverNumber: `group-hover/serviceCard:text-[#FF605F] `,
      aiServiceContentText:
        "Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
      hoverBackground: styles.serviceCard3,
    },
    {
      id: 4,
      aiServiceCss: "text-[#FF9F31]",
      aiServiceText: "3D Modelling and Design",
      hoverBorder: `hover:border-[#FF9F31]`,
      hoverNumber: `group-hover/serviceCard:text-[#FF9F31] `,
      hoverBackground: styles.serviceCard4,

      aiServiceContentText:
        "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    },
  ];
  return (
    <div className="grid place-items-center pb-[4rem] bg-[#fcfbf7] dark:bg-[#000]">

      
      <div className="flex flex-col place-items-center gap-[5px]">
        <h3 className="text-[20px] font-semibold tracking-[1.9px] dark:text-[#fff]">
          SERVICES
        </h3>

        <div className="w-[75px] h-[4px] rounded-[20px] bg-gradient-to-r from-[#0091ff] to-[#9cfeff] "></div>
      </div>

      <div>
        <h1 className={`${topHeaderCss}`}>
          We provide Artificial Intelligence Services
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px] m-auto w-[80%]">
          {serviceCardContent?.map((cardItem) => (
            <div
              className={
                darkMode
                  ? `${cardsCss} ${cardItem.hoverBorder} ${cardItem.hoverBackground}  `
                  : `${cardsCss} ${cardItem.hoverBorder}`
              }
            >
              <div className={`${cardHeaderCss}`}>
                <span className={`${spanCss}`}>0</span>
                <span
                  className={`${spanCss} ${spanCss2} ${cardItem.hoverNumber}`}
                >
                  {cardItem.id}
                </span>
                <h3 className={`${aiServiceCss} ${cardItem.aiServiceCss} `}>
                  {cardItem.aiServiceText}
                </h3>
              </div>
              <div>
                <p className={`${aiServiceContentCss}`}>
                  {cardItem.aiServiceContentText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
