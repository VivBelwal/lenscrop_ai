import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import lenscorp from "../assests/images/lenscorp_logo.webp"
import { ToogleContext } from '../context/ToggleTheme'
import lenscorp_light from "../assests/images/lenscorp_logo_light.webp"

const Navbar = () => {
  const {darkMode, toggelMode} = useContext(ToogleContext);
  const [openMenu, setOpenMenu] = useState(false);
  let displayMenu = openMenu ? 'flex' : 'hidden';
  let NavLinkActive = 'bg-clip-text text-transparent bg-gradient-to-r from-[#0091ff] to-[#9cfeff]  font-bold '
  // let conentCss = openMenu ? `` : ``;

  return (
    <header className='bg-[#fff]  dark:bg-[#e4dddd0f] dark:backdrop-blur-3xl text-[#000] dark:text-[#fff] fixed  w-[100%] justify-center items-center pt-[10px] pb-[10px] z-[100] transition duration-500'>
    <nav className='relative'>
      <div className='m-auto w-[85%] flex items-center justify-between font-sans mt-[2px]'>
    {/* ------------ Lens LOGO ----------------- */}
      
    <NavLink to="/">
      <div className='max-w-[90px] max-h-[80px]'>        
       <img src={darkMode ? lenscorp_light : lenscorp} alt="lenscorp_logo" className='w-[80px] h-[70px]'/>
      </div>
      </NavLink>
      {/* ------------ Menu Button ----------------- */}
      <div className='flex flex-col gap-y-[8px] sm:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
        <div className='w-[30px] h-[4px] bg-[#000] dark:bg-[#fff] rounded-[4px]'></div>
        <div className='w-[30px] h-[4px] bg-[#000] dark:bg-[#fff] rounded-[4px]'></div>
        <div className='w-[30px] h-[4px] bg-[#000] dark:bg-[#fff] rounded-[4px]'></div>
      </div>
      {/* ----------------- Nav Content --------------- */}
      <div className={`sm:flex hidden sm:flex-row  sm:gap-[30px] font-[16px]  font-navContent tracking-wide `}>
        <div>
          <NavLink 
          to="https://makemyweb.ai/en"  
           className={({ isActive, isPending }) => isPending ? "" : isActive ? "font-bold " : ""}
  >
            MakeMyWeb.
          </NavLink>
        </div>
        <div>
          <NavLink 
          to="/"
          className={({ isActive, isPending }) => isPending ? "" : isActive ? `${NavLinkActive}` : ""}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink 
          to="/about"
          className={({ isActive, isPending }) => isPending ? "" : isActive ? `${NavLinkActive}` : ""}

          >
            Company
          </NavLink>
        </div>
        <div >
          <NavLink 
          to="/blogs"
          className={({ isActive, isPending }) => isPending ? "" : isActive ? `${NavLinkActive}` : ""}

          >
            Blogs
          </NavLink>
        </div>
        <div>
          {/* ----------- Toggle Theme Button ---------------- */}
          <button onClick={() =>toggelMode()}>
            {
              darkMode?
               <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6" >
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </svg>
    
               </>
                :
              <>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
    </svg>
              </>
            }
         
    
    
          </button>
        </div>
      </div>

      {/* ------------- Menu content ------------ */}
      <div className={`sm:hidden ${displayMenu} bg-[#000] absolute text-[#fff] pt-5 pb-5 pl-5 pr-5 line-5 gap-[40px] w-[200px] flex-col top-[74px]  right-0 font-[16px]  font-navContent tracking-wide `}>
        <div>
          <NavLink 
          to="https://makemyweb.ai/en"  
           className={({ isActive, isPending }) => isPending ? "" : isActive ? "font-bold " : ""}
  >
            MakeMyWeb.
          </NavLink>
        </div>
        <div>
          <NavLink 
          to="/"
          className={({ isActive, isPending }) => isPending ? "" : isActive ? `${NavLinkActive}` : ""}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink 
          to="/about"
          className={({ isActive, isPending }) => isPending ? "" : isActive ? `${NavLinkActive}` : ""}

          >
            Company
          </NavLink>
        </div>
        <div >
          <NavLink 
          to="/blogs"
          className={({ isActive, isPending }) => isPending ? "" : isActive ? `${NavLinkActive}` : ""}

          >
            Blogs
          </NavLink>
        </div>
        <div>
          {/* ----------- Toggle Theme Button ---------------- */}
          <button onClick={() =>toggelMode()}>
            {
              darkMode?
               <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6" >
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </svg>
    
               </>
                :
              <>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
    </svg>
              </>
            }
         
    
    
          </button>
        </div>
      </div>
      </div>

    
  
    </nav>
    </header> 
  
  
  )
}

export default Navbar






