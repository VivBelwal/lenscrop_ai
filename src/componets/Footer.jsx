import "boxicons";
import React, { useContext } from "react";
import { ToogleContext } from "../context/ToggleTheme";
import lenscorp_light from "../assests/images/lenscorp_logo_light.webp";
import lenscorp from "../assests/images/lenscorp_logo.webp";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/footer.module.css";
import facebook from "../assests/images/facebook.png";
import twitter from "../assests/images/twitter.svg";
import twitter_dark from "../assests/images/twitter_dark.svg";

const Footer = () => {
  const { darkMode } = useContext(ToogleContext);
  const logo_data = [
    {
      id: 1,
      to: "https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc",
      name: "facebook",
      color: "",
      d: "M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z",
    },
    {
      id: 2,
      to: "https://www.instagram.com/lens_corporation/",
      name: "instagram",
      color: "",
      d: 'M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z',
      circle: true,
    },
    {
      id: 3,
      to: "https://www.linkedin.com/company/lens-corporation/",
      name: "linkedin",
      color: "",
      d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z",
    },
    {
      id: 4,
      to: "",
      name: "discord",
      color: "",
      d: "M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z",
    },
  ];

  const layout = "flex place-items-center";
  let siteMaps = [
    "MakeMyWeb.",
    "Services",
    "Products",
    "Blogs",
    "Life at LENS",
  ];
  let connect = [
    "+1-517-9300-792.",
    "+91-9990-736-796",
    "solutions@lenscorp.ai",
  ];
  let hoverAtMaps =
    "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0091ff] to-[#9cfeff] hover:cursor-pointer";
  return (
    <div
      className={`${layout}  w-[100%] bg-[#fcfbf7] dark:bg-[#000] font-navContent text-[16px] py-[4rem] dark:text-[#fff]`}
    >
      <div className="w-[85%] flex sm:justify-between sm:flex-row flex-col sm:justify-center sm:items-start place-items-center  m-auto sm:text-start text-center">
        {/* -------------- Logo and social icons --------- */}
        <div className="flex flex-col sm:gap-[48px] gap-[12px] justify-between">
          <div className="flex flex-col gap-[10px] sm:place-items-start place-items-center">
            <NavLink to="/">
              <div className="max-w-[90px] max-h-[80px] my-[5px]">
                <img
                  src={darkMode ? lenscorp_light : lenscorp}
                  alt="lenscorp_logo"
                  className="w-[80px] h-[70px]"
                />
              </div>
            </NavLink>

            <p className="text-center">Tomorrow's Vision, Today!</p>
          </div>
          <div className="flex sm:justify-start justify-center gap-[10px] mb-[10px]">
            {/* ---------- social media icons --------- */}
            {logo_data.map((logo) =>
              darkMode ? (
                <Link to={logo.to} target="blank" key={logo.id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                 
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#fff" }}
                  >
                    <path d={logo.d}></path>
                    {logo.circle && (
                      <>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </>
                    )}
                  </svg>
                </Link>
              ) : (
                <Link to={logo.to} target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id={logo.name}
                    className={`${styles.facebook}`}
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#000" }}
                  >
                    <path d={logo.d}></path>
                    {logo.circle && (
                      <>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </>
                    )}
                  </svg>
                </Link>
              )
            )}

            {darkMode ? (
              <Link to="https://twitter.com/LensCorporation" target="blank">
                <img
                  src={twitter_dark}
                  alt="twitter"
                  className={`${styles.icons} w-[30px] h-[30px]`}
                />
              </Link>
            ) : (
              <Link to="https://twitter.com/LensCorporation" target="blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className={`${styles.icons} w-[30px] h-[30px]`}
                />
              </Link>
            )}
          </div>
        </div>

        {/* ------------- Sitemaps ------------------ */}
        <div className="mb-[10px]">
          <p className="font-bold tracking-[2.88px] ">SITEMAP</p>

          <ul className="sm:mt-[2rem] mt-[1rem]">
            {siteMaps.map((items, key) => (
              <li key={key} className={`${hoverAtMaps} my-[4px]`}>
                {items}
              </li>
            ))}
          </ul>
        </div>
        {/* ------------- Connect ------------------ */}

        <div>
          <p className="font-bold tracking-[2.88px] ">CONNECT</p>

          <ul className="sm:mt-[2rem]  mt-[1rem] ">
            {connect.map((items, key) => (
              <li key={key} className={`${hoverAtMaps} my-[4px]`}>
                {items}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
