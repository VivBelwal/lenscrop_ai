import {  createContext, useState } from "react";


export const ToogleContext = createContext();


export  const ToogleContextProvider = ({children}) =>{

     const [darkMode, setDarkMode] =  useState(false);

     const toggelMode = () =>{
        document.documentElement.classList.toggle('dark') ;
        setDarkMode(!darkMode);
     }

    return <ToogleContext.Provider value={{darkMode, toggelMode}}>{children}</ToogleContext.Provider>
}